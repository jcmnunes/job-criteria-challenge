import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../UI/InputField';
import FormHeader from '../../UI/FormHeader';
import CheckboxesField from '../../UI/CheckboxesField';
import RangeInputField from '../../UI/RangeInputField';
import FormFooter from '../../UI/FormFooter';
import Button from '../../UI/Button';
import theme from '../../../styles/theme';
import { EDUCATIONS, LABELS, ERRORS } from '../../../shared/constants';

class Form extends Component {
  state = {
    ...ERRORS,
    isSubmitting: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validate(() => {
      if (this.isFormValid()) {
        this.setState({ isSubmitting: true });
        // A timeout here just for fun
        setTimeout(() => {
          this.setState({ isSubmitting: false });
          this.props.handleSubmitSuccess();
        }, 500);
      }
    });
  };

  validate = cb => {
    const { formState } = this.props;
    const { experience, educations, hours } = formState;
    const newErrors = { ...ERRORS };
    if (experience.length === 0) {
      newErrors.experienceError = 'The field is required.';
    }
    if (educations.length === 0) {
      newErrors.educationsError = 'The field is required.';
    }
    if (hours.min.length === 0) {
      newErrors.hoursMinError = 'The field is required.';
    }
    if (hours.max.length === 0) {
      newErrors.hoursMaxError = 'The field is required.';
    }
    if (
      hours.max.length !== 0 &&
      hours.min.length !== 0 &&
      !(parseInt(hours.max, 10) > parseInt(hours.min, 10))
    ) {
      newErrors.hoursMinError = `Minimum value must be less than ${formState.hours.max}`;
    }
    return this.setState({ ...newErrors }, cb);
  };

  isFormValid = () => {
    const { formState } = this.props;
    const { experience, educations, hours } = formState;
    const { experienceError, educationsError, hoursMinError, hoursMaxError } = this.state;
    return (
      experienceError.length === 0 &&
      educationsError.length === 0 &&
      hoursMinError.length === 0 &&
      hoursMaxError.length === 0 &&
      String(experience).length > 0 &&
      educations.length > 0 &&
      hours.min.length > 0 &&
      hours.max.length > 0
    );
  };

  handleOnChange = e => {
    const { experienceError, educationsError, hoursMinError, hoursMaxError } = this.state;
    if (
      experienceError.length > 0 ||
      educationsError.length > 0 ||
      hoursMinError.length > 0 ||
      hoursMaxError.length > 0
    ) {
      this.setState({ ...ERRORS });
    }

    this.props.onChange(e);
  };

  render() {
    const { formState } = this.props;
    const {
      experienceError,
      educationsError,
      hoursMinError,
      hoursMaxError,
      isSubmitting,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormHeader
          title="Job criteria"
          helper="We will use the data we collect here to better target your desired audience"
          badge={{ value: '1', color: theme.purple500 }}
        />
        <InputField
          name="experience"
          type="number"
          label={LABELS.experience}
          value={formState.experience}
          onChange={this.handleOnChange}
          min="0"
          error={experienceError}
        />
        <CheckboxesField
          label={LABELS.educations}
          checkboxes={EDUCATIONS}
          state={formState.educations}
          onChange={this.handleOnChange}
          error={educationsError}
        />
        <RangeInputField
          label={LABELS.hours}
          state={formState.hours}
          onChange={this.handleOnChange}
          minName="min"
          maxName="max"
          minError={hoursMinError}
          maxError={hoursMaxError}
          error={hoursMinError || hoursMaxError}
          min="1"
        />
        <FormFooter>
          <Button type="submit" loading={isSubmitting}>
            Save
          </Button>
        </FormFooter>
      </form>
    );
  }
}

Form.propTypes = {
  formState: PropTypes.shape({
    experience: PropTypes.string.isRequired,
    educations: PropTypes.array.isRequired,
    hours: PropTypes.shape({
      min: PropTypes.string.isRequired,
      max: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleSubmitSuccess: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;

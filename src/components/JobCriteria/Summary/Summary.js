import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormHeader from '../../UI/FormHeader';
import Label from '../../UI/Label';
import Education from '../../UI/Education';
import { IconCheckmark } from '../../UI/Icons';
import theme from '../../../styles/theme';
import { EDUCATIONS, LABELS } from '../../../shared/constants';

const SavedValues = styled.div`
  margin-bottom: 16px;

  .value-row {
    color: ${props => props.theme.neutral500};
    margin-bottom: 8px;

    .value {
      color: ${props => props.theme.neutral800};
    }
  }
`;

const Educations = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Summary extends Component {
  render() {
    const { formState } = this.props;
    return (
      <>
        <FormHeader
          title="Job criteria"
          badge={{ value: <IconCheckmark />, color: theme.green500 }}
          action={{ buttonText: 'Edit', handleClick: this.props.handleEdit }}
        />
        <SavedValues>
          <div className="value-row">
            {`${LABELS.experience}: `}
            <span className="value">{formState.experience}</span>
          </div>
          <div className="value-row">
            {`${LABELS.hours}: `}
            <span className="value">{`${formState.hours.min}‒${formState.hours.max} hours`}</span>
          </div>
        </SavedValues>
        <Label>{LABELS.educations}</Label>
        <Educations>
          {formState.educations.map(education => (
            <Education key={education}>
              {EDUCATIONS[EDUCATIONS.findIndex(o => o.name === education)].label}
            </Education>
          ))}
        </Educations>
      </>
    );
  }
}

Summary.propTypes = {
  formState: PropTypes.shape({
    experience: PropTypes.string.isRequired,
    educations: PropTypes.array.isRequired,
    hours: PropTypes.shape({
      min: PropTypes.string.isRequired,
      max: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Summary;

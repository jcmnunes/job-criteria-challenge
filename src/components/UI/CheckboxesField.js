import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';
import Error from './Error';

const StyledCheckboxes = styled.div`
  margin-bottom: 24px;

  .checkbox {
    margin: 8px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  label.label {
    font-size: 16px;
    margin-left: 8px;
  }
`;

class CheckboxesField extends Component {
  render() {
    const { label, checkboxes, onChange, state, error } = this.props;
    return (
      <StyledCheckboxes>
        <Label>{label}</Label>
        {checkboxes.map(({ name, label }) => (
          <div key={name} className="checkbox">
            <input
              type="checkbox"
              checked={state.includes(name)}
              id={name}
              name={name}
              onChange={onChange}
            />
            <label className="label" htmlFor={name}>
              {label}
            </label>
          </div>
        ))}
        {error && <Error>{error}</Error>}
      </StyledCheckboxes>
    );
  }
}

CheckboxesField.propTypes = {
  checkboxes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
};

export default CheckboxesField;

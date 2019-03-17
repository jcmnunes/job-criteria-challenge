import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';
import Error from './Error';

const StyledRangeInputField = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .input {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-right: 32px;

      .label {
        width: 40px;
      }

      &:last-of-type {
        margin-top: 12px;
      }
    }
  }

  @media (min-width: ${props => props.theme.mobile}) {
    .inputs {
      display: flex;
      flex-direction: row;
      align-items: center;

      .input {
        &:last-of-type {
          margin-top: 0;
        }
      }
    }
  }
`;

class RangeInputField extends Component {
  render() {
    const { state, min, label, onChange, minName, maxName, minError, maxError, error } = this.props;
    return (
      <StyledRangeInputField>
        <Label>{label}</Label>
        <div className="inputs">
          <div className="input">
            <div className="label">Min.</div>
            <Input
              type="number"
              value={state[minName]}
              name={minName}
              onChange={onChange}
              min={min}
              error={minError}
            />
          </div>
          <div className="input">
            <div className="label">Max.</div>
            <Input
              type="number"
              value={state[maxName]}
              name={maxName}
              onChange={onChange}
              min={min}
              error={maxError}
            />
          </div>
        </div>
        {error && <Error>{error}</Error>}
      </StyledRangeInputField>
    );
  }
}

RangeInputField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxError: PropTypes.string,
  maxName: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  minError: PropTypes.string,
  minName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    max: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
  }),
};

export default RangeInputField;

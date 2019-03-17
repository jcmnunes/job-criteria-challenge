import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';
import Error from './Error';

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

class InputField extends Component {
  render() {
    const { name, label, error, ...other } = this.props;
    return (
      <StyledInputField>
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} error={!!error} {...other} />
        {error && <Error>{error}</Error>}
      </StyledInputField>
    );
  }
}

InputField.defaultProps = {
  error: null,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default InputField;

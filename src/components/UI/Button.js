import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from './Spinner';

const StyledButton = styled.button`
  position: relative;
  background: ${props => props.theme.blue400};
  border: 1px solid ${props => props.theme.blue800};
  height: 36px;
  color: white;
  border-radius: 2px;
  font-size: 14px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: 4px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;

  &::placeholder {
    color: ${props => props.theme.neutral400};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blueFocus};
  }

  &:hover {
    background: ${props => props.theme.blue500};
  }

  &:active {
    background: ${props => props.theme.blue600};
  }

  &:disabled {
    background: ${props => props.theme.blueDisabled};
    cursor: not-allowed;
  }

  .content {
    visibility: ${props => (props.loading ? 'hidden' : 'visible')};
    display: flex;
    align-items: center;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 18px;
  }
`;

class Button extends Component {
  render() {
    const { loading, disabled, ...other } = this.props;
    return (
      <StyledButton disabled={disabled || loading} loading={loading} {...other}>
        {loading && (
          <span className="spinner">
            <Spinner />
          </span>
        )}
        <div className="content">
          <span>{this.props.children}</span>
        </div>
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;

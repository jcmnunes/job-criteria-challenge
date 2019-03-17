import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconWarning } from './Icons';

const StyledError = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  color: ${props => props.theme.red900};
  margin-top: 8px;

  .text {
    margin-left: 8px;
  }
`;

class Error extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledError>
        <IconWarning />
        <span className="text">{children}</span>
      </StyledError>
    );
  }
}

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;

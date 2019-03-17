import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Badge from './Badge';
import Button from './Button';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 16px;

  h1.title {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.neutral800};
  }

  p.description {
    margin-top: 12px;
    font-size: 16px;
    color: ${props => props.theme.neutral500};
  }
`;

class FormHeader extends Component {
  render() {
    const { badge, action, title, helper } = this.props;
    return (
      <Header>
        <Badge color={badge.color}>{badge.value}</Badge>
        <Title>
          <h1 className="title">{title}</h1>
          {!!helper && <p className="description">{helper}</p>}
        </Title>
        {action && <Button onClick={action.handleClick}>{action.buttonText}</Button>}
      </Header>
    );
  }
}

FormHeader.defaultProps = {
  helper: null,
  action: null,
};

FormHeader.propTypes = {
  badge: PropTypes.shape({
    color: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
  }),
  action: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }),
  title: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

export default FormHeader;

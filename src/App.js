import React, { Component } from 'react';
import styled from 'styled-components';
import JobCriteria from './components/JobCriteria';
import GlobalStyle from './styles/Global';

const StyledApp = styled.div`
  background: ${props => props.theme.neutral100};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100vh;
  width: 100%;
  min-width: 300px;
  padding: 18px;

  @media (min-width: ${props => props.theme.mobile}) {
    align-items: center;
    padding: 48px 24px;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <JobCriteria />
        <GlobalStyle />
      </StyledApp>
    );
  }
}

export default App;

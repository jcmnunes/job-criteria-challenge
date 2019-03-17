import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

const Spinner = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: white;
  animation: ${spin} 500ms infinite linear;
`;

export default Spinner;

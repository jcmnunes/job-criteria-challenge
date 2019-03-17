import styled from 'styled-components';

const Input = styled.input`
  height: 42px;
  background: white;
  color: ${props => props.theme.neutral800};
  border-radius: 4px;
  border: 1px solid ${props => (props.error ? props.theme.red500 : props.theme.neutral300)};
  font-size: 18px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: 0 16px;
  max-width: 80px;

  &::placeholder {
    color: ${props => props.theme.neutral400};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blueFocus};
  }
`;

export default Input;

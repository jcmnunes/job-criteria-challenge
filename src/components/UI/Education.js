import styled from 'styled-components';

const Education = styled.span`
  display: inline-block;
  border-radius: 4px;
  background: ${props => props.theme.neutral200};
  color: ${props => props.theme.neutral800};
  margin: 8px 8px 0 0;
  padding: 4px 12px;
`;

export default Education;

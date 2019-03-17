import styled from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  background: ${props => props.color};
  color: white;
  border-radius: 50%;
  font-size: 16px;
  align-items: center;
  justify-content: center;
`;

export default Badge;

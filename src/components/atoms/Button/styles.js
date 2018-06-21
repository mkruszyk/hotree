import styled from 'styled-components';

const ButtonPrototype = styled.button`
  width: 160px;
  height: 50px;
  background-color: ${props => props.theme.orange};
  border: 0;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 300;
  margin: 10px auto;
  &:hover {
    background-color: ${props => props.theme.darkOrange};
  }
`;

export default ButtonPrototype;

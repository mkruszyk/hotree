import styled from 'styled-components';

import { colors } from '../../../utils/styles/colors';

export const ButtonPrototype = styled.button`
  width: 160px;
  height: 50px;
  background-color: ${colors.orange};
  border: 0;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 300;
  margin: 10px auto;
  &:hover {
    background-color: ${colors.darkOrange};
  }
`;
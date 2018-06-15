import styled from 'styled-components';

import { inputWidth } from '../../../utils/styles/inputWidth';
import arrow from '../../../assets/images/arrow.svg';

export const SelectContainer = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: ${inputWidth["select"]};
  background-color: #fff0;
  background-position: right 50%;
  background-repeat: no-repeat;
  background-image: url(${arrow});
  padding: .5em;
  padding-right: 1.5em
`;

export const Option = styled.option`
  padding-left: 100px;
`;
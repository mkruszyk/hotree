import styled from 'styled-components';

import { inputWidth } from '../../../utils/constants/inputWidth';

export const InputContainer = styled.div`
  flex: 4;
  max-width: 460px;
`;

export const InputTemplate = styled.input`
  width: ${props => inputWidth[props.type]};
`;

export const Label = styled.label`
  margin-left: 12px;
`;
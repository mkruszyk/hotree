import styled from 'styled-components';

import { inputWidth, media } from '../../../utils/styles/constants';

export const Container = styled.div`
  grid-area: field;
`;

export const InputWrapper = styled.input`
  width: ${inputWidth.text};
  border-color: ${props => (props.error ? '' : props.theme.warningRed)};
  outline-color: ${props => (props.error ? '' : props.theme.warningRed)};
`;

export const Label = styled.p`
  display: inline-block;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 1.4rem;
  @media (${media.tablet}) {
    font-size: 1.6rem;
  }
`;


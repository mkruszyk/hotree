import styled from 'styled-components';

import { media } from '../../../utils/styles/constants';

/* eslint import/prefer-default-export: 0 */
export const TextareaWrapper = styled.textarea`
  border-color: ${props => (props.error ? props.theme.warningRed : '')};
  outline-color: ${props => (props.error ? props.theme.warningRed : '')};
  height: 100px;
  width: 100%;
  resize: none;
  @media (${media.smallMobile}) {
    height: 160px;
  }
`;

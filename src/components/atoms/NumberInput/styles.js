import styled from 'styled-components';

import { inputWidth, media } from '../../../utils/styles/constants';

export const Container = styled.div`
  grid-area: field;
`;

export const Input = styled.input`
  width: ${inputWidth.number};
  @media (${media.tablet}) {
    width: ${inputWidth.numberMobile};
  }
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


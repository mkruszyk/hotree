import styled from "styled-components";

import { inputWidth } from "../../../utils/styles/inputWidth";
import { media } from "../../../utils/styles/mediaQueries";

export const Container = styled.div`
  grid-area: field;
`;

export const InputWrapper = styled.input`
  width: ${inputWidth['text']};
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


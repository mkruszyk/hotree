import styled from "styled-components";


import { inputWidth } from "../../../utils/constants/inputWidth";
import { media } from "../../../utils/constants/mediaQueries";

export const InputContainer = styled.div`
  grid-area: field;
`;

export const InputTemplate = styled.input`
  width: ${props => inputWidth[props.type]};
`;

export const Label = styled.div`
  display: inline-block;
  margin-left: 12px;
  @media (${media.smallMobile}) {
    margin: 6px 0 0 4px;
  }
`;

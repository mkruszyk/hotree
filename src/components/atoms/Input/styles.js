import styled from "styled-components";

import { inputWidth } from "../../../utils/styles/inputWidth";
import { media } from "../../../utils/styles/mediaQueries";

export const InputContainer = styled.div`
  grid-area: field;
`;

export const InputTemplate = styled.input`
  width: ${props => inputWidth[props.type]};
  @media (${media.tablet}) {
    width: ${props => 
      props.type === 'number'
        ? inputWidth.numberMobile
        : inputWidth[props.type] 
      };
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


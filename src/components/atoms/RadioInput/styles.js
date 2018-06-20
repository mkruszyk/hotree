import styled from "styled-components";

import { media } from "../../../utils/styles/mediaQueries";

export const Field = styled.div`
  align-items: center;
  display: flex;
  height: 55px;
  margin-left: ${props => props.withLeftMargin ? '14px' : '0'}
`;

export const Radio = styled.input`
  margin-right: 10px;
`;

export const RadioDescription = styled.span`
  margin-right: 15px;
  font-size: 1.4rem;
  @media (${media.tablet}) {
    font-size: 1.6rem;
  }
`;

import styled from "styled-components";

import { media } from "../../../utils/styles/mediaQueries";

export const Field = styled.div`
`;

export const TextareaDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.span`
  display: inline-block;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 300;
  color: #a3a3a3;
  padding-top: 5px;
  @media (${media.mobile}) {
    font-size: 1.6rem;
  }
`;
import styled from "styled-components";

import { media } from "../../../utils/styles/mediaQueries";

export const Field = styled.div`
  display: flex;
  @media (${media.tablet}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  grid-area: field;
  @media (${media.tablet}) {
    margin: 12px 0;
  }
`;

export const Input = styled.input`
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-left: 12px;
  margin-right: 12px;
  @media (${media.tablet}) {
    font-size: 1.6rem;
  }
`;

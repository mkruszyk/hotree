import styled from "styled-components";

import { media } from "../../../utils/constants/mediaQueries";

export const Field = styled.div`
  display: flex;
  @media (${media.smallMobile}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  grid-area: field;
  margin: 12px 0;
`;

export const Input = styled.input``;

export const Label = styled.label`
  display: inline-block;
  margin-left: 12px;
  margin-right: 12px;
`;

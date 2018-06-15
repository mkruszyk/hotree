import styled from "styled-components";

import { media } from '../../../utils/styles/mediaQueries';

export const TextBox = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  @media (${media.smallMobile}) {
    height: 160px;
  }
`;

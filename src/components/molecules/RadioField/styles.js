import styled from 'styled-components';

import { media } from "../../../utils/constants/mediaQueries";

export const Field = styled.div`
  align-self:  center;
  @media (${media.smallMobile}) {
    align-self: auto;
    margin: 8px 0;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const RadioDescription = styled.span`
  margin-right: 15px;
`;

import styled from 'styled-components';

import { media } from "../../../utils/constants/mediaQueries";

export const Field = styled.div`
  display: flex;
  @media (${media.smallMobile}) {
    flex-direction: column;
  }
`;

export const PaidEvent = styled.div`
  align-items: center;
  display: flex;
`;

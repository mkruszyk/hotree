import styled from 'styled-components';

import { media } from '../../../utils/styles/constants';

export const Field = styled.div`
  display: flex;
  @media (${media.smallMobile}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

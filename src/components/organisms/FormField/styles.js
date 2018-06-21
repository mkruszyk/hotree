import styled from 'styled-components';

import { media } from '../../../utils/styles/constants';

/* eslint import/prefer-default-export: 0 */
export const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 135px;
  grid-template-areas: "title field tooltip";
  margin: 10px 0;
  width: 100%;
  @media (${media.mobile}) {
    grid-template-columns: 1fr;
    // grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
      "title"
      "field"
      "tooltip"
    ;
  }
`;

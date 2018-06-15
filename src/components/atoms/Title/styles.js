import styled from 'styled-components';

import { media } from "../../../utils/styles/mediaQueries";

export const FieldTitle = styled.div`
  color: ${props => props.theme.lightBlue};
  text-transform: uppercase;
  width: 150px;
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 135px;
  grid-area: title;
  @media (${media.mobile}) {
    margin-bottom: 14px;
    font-size: 1.8rem;
  }
`;

export const Mandatory = styled.span`
  color: ${props => props.theme.warningRed};
`;
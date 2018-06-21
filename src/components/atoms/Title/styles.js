import styled from 'styled-components';

import { media } from '../../../utils/styles/constants';

export const FieldTitle = styled.div`
  color: ${props => (props.error ? props.theme.lightBlue : props.theme.warningRed)};
  text-transform: uppercase;
  width: 150px;
  margin-top: 8px;
  font-size: 1.4rem;
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

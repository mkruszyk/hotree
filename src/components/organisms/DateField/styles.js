import styled from 'styled-components';

import { media } from '../../../utils/styles/constants';

export const Field = styled.div`
  display: flex;
  @media (${media.tablet}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  grid-area: field;
  @media (${media.tablet}) {
    margin: 12px 0;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  @media (${media.smallMobile}) {
    margin: 14px 0;
  }
`;

export const DateTimeInput = styled.input`
  border-color: ${props => (props.error ? '' : props.theme.warningRed)};
  outline-color: ${props => (props.error ? '' : props.theme.warningRed)};
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

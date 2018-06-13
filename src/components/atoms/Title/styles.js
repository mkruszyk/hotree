import styled from 'styled-components';

export const FieldTitle = styled.div`
  color: ${props => props.theme.lightBlue};
  text-transform: uppercase;
  width: 150px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 300;
  flex: 1;
  max-width: 135px;
`;

export const Mandatory = styled.span`
  color: ${props => props.theme.warningRed};
`;
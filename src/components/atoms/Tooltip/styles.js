import styled from 'styled-components';

export const TooltipContainer = styled.div`
  display: ${props => (props.isVisible ? "block" : "none")};
  background-color: red;
  width: 100px;
`;

export const TooltipText = styled.span`
  font-size: 10px;
`;
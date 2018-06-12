import styled from 'styled-components';

export const Tooltip = styled.div`
  display: ${props => (props.isVisible ? "block" : "none")};
  background-color: red;
  width: 200px;
`;

export const TooltipText = styled.span`
  font-size: 10px;
`;
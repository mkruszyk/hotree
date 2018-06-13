import styled from "styled-components";

export const TooltipContainer = styled.div`
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  flex: 1;
  position: relative;
  display: flex;
`;

export const TooltipWrapper = styled.div`
  display: flex;
  margin: 5px;
  max-height: 38px
`;

export const TooltipText = styled.span`
  background-color: ${props => props.theme.warningRed};
  border-radius: 3px;
  color: white;
  font-size: 11px;
  text-align: center;
  padding: 5px 0px;
  position: relative;
  width: 125px;
  visibility: visible;
  &:before {
    border-color: ${props => props.theme.warningRed} transparent transparent transparent;
    border-style: solid;
    border-width: 5px;
    content: "";
    position: absolute;
    top: calc(55% - 6px);
    left: -7%;
    transform: rotate(90deg);
  }
`;

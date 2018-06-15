import styled from "styled-components";

import { media } from "../../../utils/styles/mediaQueries";

export const TooltipContainer = styled.div`
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  position: relative;
  display: flex;
  justify-content: center;
  grid-area: tooltip;
  @media (${media.mobile}) {
    margin-top: 8px;
  }
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
  font-size: 1.1rem;
  text-align: center;
  padding: 5px 0px;
  position: relative;
  width: 125px;
  visibility: visible;
  @media (${media.mobile}) {
    width: 200px;
    font-size: 1.4rem;
  }
  &:before {
    border-color: ${props => props.theme.warningRed} transparent transparent transparent;
    border-style: solid;
    border-width: 5px;
    content: "";
    position: absolute;
    top: calc(55% - 6px);
    left: -7%;
    transform: rotate(90deg);
    @media (${media.mobile}) {
      transform: rotate(180deg);
      top: -38%;
      left: calc(50% - 10px);
    }
  }
`;

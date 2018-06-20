import styled from "styled-components";

import { media } from "../../../utils/styles/mediaQueries";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 43px;
  grid-area: tooltip;
  position: relative;
  @media (${media.mobile}) {
    margin-top: 8px;
  }
`;

export const TooltipWrapper = styled.div`
  display: flex;
  margin: 5px;
  max-height: 38px
`;

export const Text = styled.span`
  align-self: center;
  background-color: ${props => props.theme.warningRed};
  border-radius: 3px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 8px 0px;
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
      top: -30%;
      left: calc(50% - 10px);
    }
  }
`;

import React from 'react';

import { TooltipContainer, TooltipWrapper, TooltipText } from './styles';

export const Tooltip = ({ isVisible, text }) => (

  <TooltipContainer isVisible={isVisible}>
    <TooltipWrapper>
      <TooltipText>{text}</TooltipText>
    </TooltipWrapper>
  </TooltipContainer>
);

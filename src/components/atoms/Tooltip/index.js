import React from 'react';

import { TooltipContainer, TooltipText } from './styles';

export const Tooltip = ({ isVisible, text }) => (
  <TooltipContainer isVisible={isVisible}>
    <TooltipText>{text}</TooltipText>
  </TooltipContainer>
);

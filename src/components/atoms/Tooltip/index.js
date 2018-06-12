import React from 'react';

import { Tooltip, TooltipText } from './styles';

export const InputTooltip = (props) => (
  <Tooltip isVisible={props.isVisible}>
    <TooltipText>{props.text}</TooltipText>
  </Tooltip>
);

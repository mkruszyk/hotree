import React from 'react';

import { Container, TooltipWrapper, Text } from './styles';

export const Tooltip = ({ text }) => (
  <Container>
    <TooltipWrapper>
      <Text>{text}</Text>
    </TooltipWrapper>
  </Container>
);

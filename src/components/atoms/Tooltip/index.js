import React from 'react';
import PropTypes from 'prop-types';

import { Container, TooltipWrapper, Text } from './styles';

const Tooltip = ({ text }) => (
  <Container>
    <TooltipWrapper>
      <Text>{text}</Text>
    </TooltipWrapper>
  </Container>
);

Tooltip.propTypes = {
  text: PropTypes.string,
};

export default Tooltip;

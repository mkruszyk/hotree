import React from 'react';
import PropTypes from 'prop-types';

import { Container, TooltipWrapper, Text } from './styles';

const Tooltip = ({ error }) => (
  <Container error={error}>
    <TooltipWrapper>
      <Text>{error}</Text>
    </TooltipWrapper>
  </Container>
);

Tooltip.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default Tooltip;

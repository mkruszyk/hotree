import React from 'react';
import PropTypes from 'prop-types';

import ButtonPrototype from './styles';

const Button = ({
  onClick,
  title,
}) => (
  <ButtonPrototype
    onClick={onClick}
  >
    {title}
  </ButtonPrototype>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;

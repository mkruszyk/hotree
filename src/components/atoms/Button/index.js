import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './styles';

const Button = ({
  onClick,
  title,
}) => (
  <ButtonWrapper
    onClick={onClick}
  >
    {title}
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;

import React from 'react';

import { ButtonPrototype } from './styles';

export const Button = ({
  onClick,
  title,
}) => (
  <ButtonPrototype 
    onClick={onClick} 
  > 
    {title}
  </ButtonPrototype>
);
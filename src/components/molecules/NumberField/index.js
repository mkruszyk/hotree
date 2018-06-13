import React from 'react';

import { Input } from '../../atoms/Input';
import { Field, Label } from './styles';

export const NumberField = ({
  desc,
  id,
  min,
  max,
  name,
  placeholder,
  type
}) => (
  <Field>
    <Input 
      id={id}
      name={name}
      placeholder={placeholder}
      min={min}
      max={max}
      type={type}
    />
    <Label>
      {desc}
    </Label>
  </Field>  
);

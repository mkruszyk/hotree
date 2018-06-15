import React from 'react';

import { Select } from '../../atoms/Select';

import { Field, Description } from './styles';

export const SelectField = ({ 
  desc,
  id, 
  placeholder,
  onChange, 
  options, 
  value
}) => (
  <Field>
    <Select 
      id={id} 
      placeholder={placeholder}
      options={options} 
      onChange={onChange} 
      value={value}
    />
    <Description>{desc}</Description>
  </Field>
);
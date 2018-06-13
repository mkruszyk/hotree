import React from 'react';

import { Select } from '../../atoms/Select';

import { Field, Description } from './styles';

export const SelectField = ({ 
  desc,
  id, 
  name,
  onChange, 
  options, 
  required
}) => (
  <Field>
    <Select 
      options={options} 
      id={id} 
      name={name} 
      onChange={onChange} 
      required={required} 
    />
    <Description>{desc}</Description>
  </Field>
);
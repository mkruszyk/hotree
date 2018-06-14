import React from 'react';

import { Select } from '../../atoms/Select';

import { Field, Description } from './styles';

export const SelectField = ({ 
  desc,
  id, 
  onChange, 
  options, 
  isCategory
}) => (
  <Field>
    <Select 
      id={id} 
      options={options} 
      onChange={onChange} 
      isCategory={isCategory}
    />
    <Description>{desc}</Description>
  </Field>
);
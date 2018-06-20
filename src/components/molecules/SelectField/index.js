import React from 'react';

import { Select } from '../../atoms/Select';

import { Field, Description } from './styles';

export const SelectField = ({   // wywalic
  data,
  defaultInfo,
  defaultValue,
  desc,
  email,
  id, 
  placeholder,
  onChange, 
  options, 
  value
}) => (
  <Field>
    <Select 
      id={id} 
      data={data}
      defaultInfo={defaultInfo}
      defaultValue={defaultValue}
      email={email}
      placeholder={placeholder}
      options={options} 
      onChange={onChange} 
      value={value}
    />
    <Description>{desc}</Description>
  </Field>
);
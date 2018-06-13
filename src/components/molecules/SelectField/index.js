import React from 'react';

import { Select } from '../../atoms/Select';
import { ItalicDescription } from '../../atoms/ItalicDescription';

import { Field } from './styles';

export const SelectField = ({ 
  categories, 
  desc,
  id, 
  name,
  onChange, 
  required
}) => (
  <Field>
    <Select 
      categories={categories} 
      id={id} 
      name={name} 
      onChange={onChange} 
      required={required} 
    />
    <ItalicDescription desc={desc} />
  </Field>
);
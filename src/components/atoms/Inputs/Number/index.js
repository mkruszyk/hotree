import React from 'react'
import { InputModel, Input, NumberDesc } from './styles';

export const InputNumber = ({
    id,
    type,
    placeholder,
    name,
    onChange,
    desc
}) => (
  <InputModel type={type}>
    <Input 
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
    <NumberDesc>
      {desc}
    </NumberDesc>
  </InputModel>  
);

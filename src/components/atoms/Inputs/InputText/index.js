import React from 'react'
import { InputModel, Input, TextUnderInput } from './styles';

export const InputTemplate = ({
    id,
    type,
    placeholder,
    name={name},
    onChange,
    checked,
    italic
}) => (
  <InputModel>
    <Input 
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <TextUnderInput>{italic}</TextUnderInput>
  </InputModel>  
);

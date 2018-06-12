import React from 'react'
import { Input } from './styles';

export const InputText = ({
    id,
    type,
    placeholder,
    name,
    onChange,
}) => (
    <Input 
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autocomplete="off"
    />
);

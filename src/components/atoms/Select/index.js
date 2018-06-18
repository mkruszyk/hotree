import React from 'react';

import { SelectContainer, Option } from './styles';

export const Select = ({
  id,
  data,
  defaultInfo,
  defaultValue,
  email,
  placeholder,
  onChange,
  options,
}) => {
  const handleOnChange = (e) => {
    e.preventDefault(e);
    const { value } = e.target;
    const payload = { ...data };
    const coordinator = options.filter(coordinator => coordinator.id === Number(value))[0];
    payload.value = coordinator;
    {payload.value.email && setEmail(payload.value.email)}
    onChange(payload);
  }
  const setEmail = (emailAdress) => {
    const payload = { ...email };
    payload.value = emailAdress;
    onChange(payload);
  }
  return (
    <SelectContainer 
      id={id} 
      onChange={handleOnChange}
      value={data.value.id || defaultValue}
    > 
      {placeholder &&(
        <Option value="">{placeholder}</Option>
      )}
      {options.map(item => (
        <Option 
          key={item.id} 
          value={item.id}
        >
          {item.id === defaultValue && (defaultInfo)} 
          {item.name} {item.lastname}
        </Option>
      ))}
    </SelectContainer>
  );
};
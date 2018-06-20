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
    payload.value = options.find(item => item.id === Number(value));
    
    if (payload.id === 'responsible') {
      setEmail(payload.value.email);
    }
    
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
      {defaultValue &&
        options.filter(employe => employe.id === defaultValue).map(item => (
          <optgroup key="loggedIn" label="Logged in">
            <Option 
              key={item.id} 
              value={item.id}
            >
              {item.id === defaultValue && (defaultInfo)} 
              {item.name} {item.lastname}
            </Option>
          </optgroup>
      ))}
      {placeholder &&(
        <Option value="" disabled selected>{placeholder}</Option>
      )}
        <optgroup key="others" label="">
        {options.filter(employe => employe.id !== defaultValue).map(item => (
          <Option 
            key={item.id} 
            value={item.id}
          >
            {item.name} {item.lastname}
          </Option>
        ))}
      </optgroup>
    </SelectContainer>
  );
};
import React from 'react';

import { SelectContainer, Option } from './styles';

export const Select = ({
  id,
  placeholder,
  onChange,
  options,
  value,
}) => (
  <SelectContainer 
    id={id} 
    onChange={() => onChange()}
    value={value}
  > 
    <Option>{placeholder}</Option>
    {options.map(item => (
        <Option 
          key={item.id} 
          value={item.name}
        >
          {item.name === value ? 'Me - ' : ''} 
          {item.name} {item.lastname} 
        </Option>
      )
    )}
  </SelectContainer>
);
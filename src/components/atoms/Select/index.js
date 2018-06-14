import React from 'react';

import { SelectContainer, Option } from './styles';

export const Select = ({
  id,
  onChange,
  options,
  isCategory,
}) => (
  <SelectContainer 
    id={id} 
    onChange={() => onChange()}
  >
    {isCategory && (
      <Option key="0" value="">Select category (skills, interests, locations)</Option>
    )}
    {options.map(item => (
        <Option 
          key={item.id} 
          value={item.name}
          selected={item.name === "Walter" ? true : false}
        >
          {item.name === "Walter" ? 'Me - ' : ''} 
          {item.name} {item.lastname} 
        </Option>
      )
    )}
  </SelectContainer>
);
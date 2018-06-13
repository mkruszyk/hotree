import React from 'react';

import { SelectContainer } from './styles';

export const Select = ({
  id,
  onChange,
  options,
}) => (
  <SelectContainer 
    id={id} 
    onChange={() => onChange()}
  >
    <option key="0" value="">Select category (skills, interests, locations)</option>
    {options.map(item => (
        <option 
          key={item.id} 
          value={item.name}
        >
          {item.name}
        </option>
      )
    )}
  </SelectContainer>
);
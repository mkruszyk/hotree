import React from 'react';

export const Select = ({
  categories,
  id,
  onChange,
}) => (
  <select id={id} onChange={() => onChange()}>
    <option key="00" value="">Select category (skills, interests, location)</option>
    {categories.map(item => (
        <option 
          key={item.id} 
          value={item.name}
        >
          {item.name}
        </option>
      )
    )}
  </select>
);
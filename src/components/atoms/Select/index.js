import React from 'react';
import PropTypes from 'prop-types';

import { dataPropType } from '../../../utils/constants';
import { SelectContainer, Option } from './styles';

const Select = ({
  data,
  defaultValue,
  placeholder,
  onChange,
  options,
}) => {
  const handleOnChange = (e) => {
    e.preventDefault(e);
    const value = options.find(item => item.id === Number(e.target.value));
    onChange(data, value);
  };
  return (
    <SelectContainer
      id={data.id}
      onChange={handleOnChange}
      value={data.value.id || defaultValue}
    >
      {placeholder && (
        <Option value="default" disabled>{placeholder}</Option>
      )}
      {options.map(item => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </SelectContainer>
  );
};

Select.propTypes = {
  data: dataPropType,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
};

export default Select;

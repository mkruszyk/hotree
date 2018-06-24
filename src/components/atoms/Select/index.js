import React from 'react';
import PropTypes from 'prop-types';

import { dataPropType } from '../../../utils/constants';
import { SelectWrapper, Option } from './styles';

const Select = ({
  data,
  defaultValue,
  placeholder,
  onChange,
  options,
}) => (
  <SelectWrapper
    id={data.id}
    onChange={e => onChange(e, options)}
    value={data.value.name || defaultValue}
  >
    {placeholder && (
    <Option value="default" disabled>{placeholder}</Option>
      )}
    {options.map(item => (
      <Option key={item.id} value={item.name}>
        {item.name}
      </Option>
      ))}
  </SelectWrapper>
);

Select.propTypes = {
  data: dataPropType,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
};

export default Select;

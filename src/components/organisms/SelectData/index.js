import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setData } from '../../../store/actions/formActions';
import { requiredDataPropType, dataPropType } from '../../../utils/constants';
import { SelectWrapper, Default, Others, Option } from './styles';

const SelectData = (props) => {
  const {
    otherData,
    data,
    defaultInfo,
    defaultValue,
    options,
  } = props;
  const setAddData = (value) => {
    props.setData(otherData.id, 'value', value.email);
  };
  const handleOnChange = (e) => {
    e.preventDefault(e);
    const selected = options.find(item => item.name === e.target.value);
    props.setData(data.id, 'value', selected);
    setAddData(selected);
  };
  return (
    <SelectWrapper
      id={data.id}
      onChange={handleOnChange}
      value={data.value.name || defaultValue}
    >
      {defaultValue && (
        <Default key="loggedIn" label="Logged in">
          {options.filter(coordinator => coordinator.name === defaultValue).map(item => (
            <Option
              key={item.id}
              value={item.name}
            >
              {item.name === defaultValue && (defaultInfo)}
              {item.name} {item.lastname}
            </Option>))}
        </Default>
      )}
      <Others key="others" label="">
        {options.filter(item => item.name !== defaultValue).map(item => (
          <Option
            key={item.id}
            value={item.name}
          >
            {item.name} {item.lastname}
          </Option>
          ))}
      </Others>
    </SelectWrapper>
  );
};

const mapDispatchToProps = {
  setData,
};

SelectData.propTypes = {
  otherData: requiredDataPropType,
  data: dataPropType,
  defaultInfo: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setData: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(SelectData);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { validate } from '../../../utils/validator';
import { setData } from '../../../store/actions/formActions';
import { setErrors } from '../../../store/actions/errorActions';
import { requiredDataPropType, dataPropType } from '../../../utils/constants';
import { SelectContainer, Default, Others, Option } from './styles';

const SelectData = (props) => {
  const {
    additionalData,
    data,
    defaultInfo,
    defaultValue,
    options,
  } = props;
  const setAddData = (value) => {
    const validateEmail = validate(additionalData.type, value.email);
    props.setErrors(additionalData.type, validateEmail);
    props.setData(additionalData.id, 'value', value.email);
  };
  const handleOnChange = (e) => {
    e.preventDefault(e);
    const value = options.find(item => item.id === Number(e.target.value));
    props.setData(data.id, 'value', value);
    setAddData(value);
  };
  return (
    <SelectContainer
      id={data.id}
      onChange={handleOnChange}
      value={data.value.id || defaultValue}
    >
      {defaultValue && (
        <Default key="loggedIn" label="Logged in">
          {options.filter(employe => employe.id === defaultValue).map(item => (
            <Option
              key={item.id}
              value={item.id}
            >
              {item.id === defaultValue && (defaultInfo)}
              {item.name} {item.lastname}
            </Option>))}
        </Default>
      )}
      <Others key="others" label="">
        {options.filter(item => item.id !== defaultValue).map(item => (
          <Option
            key={item.id}
            value={item.id}
          >
            {item.name} {item.lastname}
          </Option>
          ))}
      </Others>
    </SelectContainer>
  );
};

const mapDispatchToProps = {
  setData,
  setErrors,
};

SelectData.propTypes = {
  additionalData: requiredDataPropType,
  data: dataPropType,
  defaultInfo: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setData: PropTypes.func.isRequired,
  setErrors: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(SelectData);

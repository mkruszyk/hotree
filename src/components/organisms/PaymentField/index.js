import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { validate } from '../../../utils/validator';
import { setErrors } from '../../../store/actions/errorActions';
import { radioFieldPropType, requiredDataPropType } from '../../../utils/constants';

import NumberInput from '../../atoms/NumberInput';
import RadioInput from '../../atoms/RadioInput';

import { Field, PaidEvent } from './styles';

const PaymentField = (props) => {
  const { options, selected } = props.data;
  const handleOnChange = (e) => {
    props.onChange(props.data, e.target.value);
    if (e.target.value === 'freeEvent') {
      const validatedValue = validate(e.target.value, props.additionalData.value);
      props.setErrors(props.additionalData.id, validatedValue);
    }
  };
  const renderEventFee = option => (
    option === 'paidEvent' && selected === 'paidEvent' && (
    <NumberInput
      id={props.additionalData.id}
      error={props.error}
      name={props.additionalData.id}
      data={props.additionalData}
      additionalData={props.data.selected}
      desc="$"
      placeholder="Fee"
      onChange={props.onChange}
      value={props.additionalData.value}
    />
    )
  );
  return (
    <Field>
      {options.map(option => (
        <PaidEvent key={option.id}>
          <RadioInput
            key={option.id}
            id={option.id}
            name={option.id}
            checked={option.value === selected}
            desc={option.desc}
            onChange={handleOnChange}
            value={option.value}
          />
          {renderEventFee(option.id)}
        </PaidEvent>
      ))}
    </Field>
  );
};

const mapDispatchToProps = {
  setErrors,
};

PaymentField.propTypes = {
  additionalData: requiredDataPropType,
  data: radioFieldPropType,
  onChange: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(PaymentField);

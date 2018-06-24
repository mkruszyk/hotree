import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { validateField } from '../../../utils/validator';
import { setData } from '../../../store/actions/formActions';
import { setFieldError } from '../../../store/actions/errorActions';
import { radioFieldPropType, requiredDataPropType } from '../../../utils/constants';

import NumberInput from '../../atoms/NumberInput';
import RadioInput from '../../atoms/RadioInput';

import { Field, Container } from './styles';

const PaymentField = (props) => {
  const {
    data,
    otherData,
    handleInput,
    handleRadio,
    error,
  } = props;
  const { options, selected } = data;
  const handleEventType = (e) => {
    if (e.target.value === 'freeEvent') {
      const validatedValue = validateField(e.target.value, otherData.value, selected);
      props.setFieldError(otherData.id, validatedValue);
      handleInput({ target: { id: otherData.id, value: '' } });
    }
    handleRadio(data.id, e);
  };
  const handleEventFee = (e) => {
    const validatedValue = validateField(e.target.id, e.target.value, selected);
    props.setFieldError(e.target.id, validatedValue);
    handleInput(e);
  };
  const renderEventFee = option => (
    option === 'paidEvent' && selected === 'paidEvent' && (
    <NumberInput
      id={otherData.id}
      error={error}
      name={otherData.id}
      data={otherData}
      desc="$"
      placeholder="Fee"
      onChange={handleEventFee}
      toValidate={otherData.toValidate}
      value={otherData.value}
    />
    )
  );
  return (
    <Field>
      {options.map(option => (
        <Container key={option.id}>
          <RadioInput
            key={option.id}
            id={option.id}
            name={option.id}
            checked={option.value === selected}
            desc={option.desc}
            onChange={handleEventType}
            value={option.value}
          />
          {renderEventFee(option.id)}
        </Container>
      ))}
    </Field>
  );
};

const mapDispatchToProps = {
  setFieldError,
  setData,
};

PaymentField.propTypes = {
  otherData: requiredDataPropType,
  data: radioFieldPropType,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  setFieldError: PropTypes.func,
  handleInput: PropTypes.func,
  handleRadio: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(PaymentField);

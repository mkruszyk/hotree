import React from 'react';
import PropTypes from 'prop-types';

import { requiredDataPropType, dataPropType } from '../../../utils/constants';

import { Container, Input, Label } from './styles';

const NumberInput = (props) => {
  const handleOnChange = (e) => {
    e.preventDefault(e);
    props.onChange(props.data, e.target.value);
  };
  return (
    <Container>
      <Input
        error={props.error}
        id={props.id}
        min={props.min}
        max={props.max}
        name={props.name}
        onChange={handleOnChange}
        placeholder={props.placeholder}
        type="number"
        value={props.value}
      />
      {props.desc && <Label>{props.desc}</Label>}
    </Container>
  );
};

NumberInput.propTypes = {
  data: PropTypes.oneOfType([
    dataPropType,
    requiredDataPropType,
  ]),
  desc: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default NumberInput;

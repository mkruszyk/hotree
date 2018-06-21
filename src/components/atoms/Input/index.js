import React from 'react';
import PropTypes from 'prop-types';

import { requiredDataPropType } from '../../../utils/constants';

import { Container, InputWrapper, Label } from './styles';

const Input = (props) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    props.onChange(props.data, e.target.value);
  };
  return (
    <Container>
      <InputWrapper
        error={props.error}
        autocomplete="off"
        id={props.data.id}
        name={props.data.name}
        onChange={handleOnChange}
        placeholder={props.placeholder}
        type="text"
        value={props.data.value}
      />
      {props.desc && (<Label>{props.desc}</Label>)}
    </Container>
  );
};

Input.propTypes = {
  data: requiredDataPropType,
  desc: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Input;

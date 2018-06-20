import React from "react";

import { validate } from '../../../utils/validator';

import { Container, InputWrapper, Label } from "./styles";

export const Input = (props) => {
  const handleOnChange = (e) => {
    e.preventDefault(e);
    const { value } = e.target;
    const payload = { ...props.data };
    payload.value = value;
    payload.isValid = validate(payload.id, value);
    props.onChange(payload);
  }
  return (
  <Container error={props.error}>
    <InputWrapper
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

import React from "react";

import { validate } from '../../../utils/validator';

import { Container, Input, Label } from "./styles";

export const NumberInput = (props) => {
  const handleOnChange = (e) => {
    let payload = { ...props.data };
    payload.value = e.target.value;
    if (payload.id === 'event_fee') {
      payload.isValid = validate(props.additionalData, payload.value);
    }
    props.onChange(payload);
  }
  return (
    <Container>
      <Input
        id={props.id}
        min={props.min}
        max={props.max}
        name={props.name}
        onChange={handleOnChange}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
      {props.desc && <Label>{props.desc}</Label>}
    </Container>
  );
};

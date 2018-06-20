import React from "react";

import { validate } from '../../../utils/validator';

import { TextareaWrapper } from "./styles";

export const Textarea = (props) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const payload = { ...props.data };
    payload.value = e.target.value;
    payload.isValid = validate(payload.id, payload.value);
    props.onChange(payload);
  }
  return (
    <TextareaWrapper
      onChange={handleOnChange}
      maxLength={props.maxLength}
      placeholder={props.placeholder} 
    />
  )
};


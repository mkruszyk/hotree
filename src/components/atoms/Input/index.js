import React from "react";
import { InputContainer, InputTemplate, Label } from "./styles";
import { validateInputPayload } from '../../../validation/validateInputPayload';

export const Input = ({
  checked,
  data,
  id,
  desc,
  min,
  max,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  required,
}) => {
  const handleOnChange = (e) => {
    console.log('DEBUG : ', );
    e.preventDefault(e);
    const payload = { ...data };
    payload.value = e.target.value;
    const validatedPayload = validateInputPayload(payload.type, payload);
    onChange(validatedPayload);
  }
  return (
  <InputContainer>
    <InputTemplate
      autocomplete="off"
      checked={checked}
      id={id}
      min={min}
      max={max}
      name={name}
      onBlur={onBlur}
      onChange={handleOnChange}
      placeholder={placeholder}
      type={type}
      required={required}
      value={data.value}
    />
    {desc && (<Label name={name}>{desc}</Label>)}
  </InputContainer>
  );
};

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
  value,
  isFeeVisible
}) => {
  const handleOnChange = (e) => {
    e.preventDefault(e);
    const payload = { ...data };
    payload.value = e.target.value;
    const validatedPayload = validateInputPayload(payload.type, payload);
    onChange(validatedPayload);
  }
  return (
  <InputContainer isFeeVisible={isFeeVisible}>
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
      value={value}
    />
    {desc && (<Label name={name}>{desc}</Label>)}
  </InputContainer>
  );
};

import React from "react";
import { InputContainer, InputTemplate } from "./styles";

export const Input = ({
  checked,
  id,
  min,
  max,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  required
}) => (
  <InputContainer>
    <InputTemplate
      autocomplete="off"
      checked={checked}
      id={id}
      min={min}
      max={max}
      name={name}
      onBlur={onBlur}
      onChange={() => onChange()}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  </InputContainer>
);

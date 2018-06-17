import React from "react";

import { validateInputPayload } from '../../../validation/validateInputPayload';

import { TextBox } from "./styles";

export const Textarea = ({ 
  data,
  maxLength,
  onChange,
  placeholder,
}) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const payload = { ...data };
    payload.value = e.target.value;
    const validatedPayload = validateInputPayload(payload.type, payload);
    onChange(validatedPayload);
  }
  return (
    <TextBox
      onChange={handleOnChange}
      maxLength={maxLength}
      placeholder={placeholder} 
    />
  )
};


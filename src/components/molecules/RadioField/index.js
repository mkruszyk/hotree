import React from "react";

import { Field, Radio, RadioDescription } from "./styles";
 
export const RadioField = ({ 
  id,
  name,
  checked, 
  desc,
  data,
  onChange, 
  withLeftMargin,
  value
}) => {
  const handleOnChange = (e) => {
    const payload = { ...data };
    payload.selectedValue = e.target.value;
    onChange(payload);
  }
  return (
  <Field withLeftMargin={withLeftMargin} >
    <Radio 
      id={id}
      name={name}
      type="radio"
      checked={checked}
      onChange={handleOnChange}
      value={value}
    />
    <RadioDescription>
      {desc}
    </RadioDescription>
  </Field>
)};

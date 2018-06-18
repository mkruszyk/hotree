import React from "react";

import { Field, Radio, RadioDescription } from "./styles";
import { formatTime } from "../../../utils/functions/formatTime";
 
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
    let payload = { ...data };
    console.log('DEBUG payload: ', payload);
    payload.selectedValue = e.target.value;
    if (payload.id === 'startsOn') {
      const formatted = formatTime(payload);
      formatted.time.am_pm = e.target.value;
      onChange(formatted);
    } else {
      onChange(payload);
    }
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

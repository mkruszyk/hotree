import React from "react";
import { Input, Field, RadioDescription } from "./styles";

 
export const RadioField = ({ 
  id,
  name,
  checked, 
  desc, 
  onChange, 
  withLeftMargin
}) => (
  <Field withLeftMargin={withLeftMargin} >
    <Input 
      id={id}
      name={name}
      type="radio"
      checked={checked}
      onChange={onChange}
    />
    <RadioDescription>
      {desc}
    </RadioDescription>
  </Field>
);

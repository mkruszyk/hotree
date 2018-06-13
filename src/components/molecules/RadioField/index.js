import React from "react";
import { Field, Input, RadioDescription } from "./styles";

export const RadioField = ({ 
  id,
  name,
  checked, 
  desc, 
  onChange, 
}) => (
  <Field>
    <Input 
      id={id}
      name={name}
      type="radio"
      checked={checked}
      onChange={() => onChange()}
    />
    <RadioDescription>
      {desc}
    </RadioDescription>
  </Field>
);

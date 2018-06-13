import React from "react";
import { InputModel, Input, RadioDescription } from "./styles";

export const RadioField = ({ 
  id,
  name,
  checked, 
  desc, 
  onChange, 
}) => (
  <InputModel>
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
  </InputModel>
);

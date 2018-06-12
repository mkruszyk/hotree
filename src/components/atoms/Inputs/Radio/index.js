import React from "react";
import { InputModel, Input, RadioDesc } from "./styles";

export const InputRadio = ({ id, type, checked, desc }) => (
  <InputModel>
    <Input 
      id={id} 
      type={type} 
      checked={checked} 
    />
    <RadioDesc>
        {desc}
    </RadioDesc>
  </InputModel>
);

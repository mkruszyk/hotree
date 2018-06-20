import React from "react";

import { Field, Radio, RadioDescription } from "./styles";
 
export const RadioInput = (props) => (
  <Field withLeftMargin={props.withLeftMargin}>
    <Radio 
      id={props.id}
      name={props.name}
      type="radio"
      checked={props.checked}
      onChange={props.onChange}
      value={props.value}
    />
    <RadioDescription>
      {props.desc}
    </RadioDescription>
  </Field>
);

import React from "react";

import { Textarea } from '../../atoms/Textarea';

import { Field, TextareaDescription, Description } from "./styles";

export const TextareaField = ({
  data,
  desc,
  error,
  maxLength,
  onChange,
  placeholder,
}) => (
  <Field error={error}>
    <Textarea 
      data={data}
      desc={desc}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
    />
    <TextareaDescription>
      <Description>{desc}</Description>
      <Description>{data.value.length}/{maxLength}</Description>
    </TextareaDescription>
  </Field>
);

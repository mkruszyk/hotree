import React, { Component } from "react";

import { Textarea } from '../../atoms/Textarea';

import { Field, TextareaDescription, Description } from "./styles";

export const TextareaField = ({
  data,
  desc,
  maxLength,
  onChange,
  placeholder,
}) => (
  <Field>
    <Textarea 
      data={data}
      desc={desc}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
    />
    <TextareaDescription>
      <Description>{desc}</Description>
      <Description>{data.value.length}/140</Description>
    </TextareaDescription>
  </Field>
);

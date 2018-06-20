import React from "react";

import { Input } from "../../atoms/Input";
import { NumberInput } from "../../atoms/NumberInput";
import { Title } from "../../atoms/Title";
import { Tooltip } from "../../atoms/Tooltip";

import { SelectField } from "../../molecules/SelectField";
import { TextareaField } from "../../molecules/TextareaField";

import { PaymentField } from "../PaymentField";
import { DateField } from "../DateField";

import { Field } from "./styles";

export const FormField = ({
  titleDesc,
  titleMandatory,
  type,
  data,
  isError,
  errorInfo,
  ...other
}) => (
  <Field>
    <Title desc={titleDesc} mandatory={titleMandatory} />
    {type === "input" && ( 
      <Input data={data} error={isError} {...other} />
    )}
    {type === "numberInput" && ( 
      <NumberInput data={data} error={isError} {...other} />
    )}
    {type === "textarea" && (
      <TextareaField data={data} error={isError} {...other} />
    )}
    {type === "select" && ( 
      <SelectField data={data} {...other} />
    )}
    {type === "payment" && (
      <PaymentField 
        data={data} 
        error={isError} 
        {...other} 
      />
    )}
    {type === "date" && (
      <DateField data={data} error={isError} {...other} />
    )}
    {!isError && <Tooltip isVisible={isError} text={errorInfo} />}
  </Field>
);

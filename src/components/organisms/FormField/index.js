import React from "react";

import { Input } from "../../atoms/Input";
import { Title } from "../../atoms/Title";
import { Tooltip } from "../../atoms/Tooltip";

import { SelectField } from "../../molecules/SelectField";
import TextareaField from "../../molecules/TextareaField";

import PaymentField from "../PaymentField";
import DateField from "../DateField";

import { Field } from "./styles";

export const FormField = ({
  titleDesc,
  titleMandatory,
  isInput,
  inputId,
  inputDesc,
  inputMin,
  inputMax,
  inputName,
  inputPlaceholder,
  inputType,
  isSelect,
  selectDesc,
  selectId,
  selectOptions,
  selectOnChange,
  isTextarea,
  textareaPlaceholder,
  textareaMaxlength,
  textareaDesc,
  isTooltip,
  tooltipText,
  tooltipIsVisible,
  isPayment,
  isDate,
  isCategory
}) => (
  <Field>
    <Title 
      desc={titleDesc} 
      mandatory={titleMandatory} 
    />
    {isInput && (
      <Input
        id={inputId}
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        min={inputMin}
        max={inputMax}
        desc={inputDesc}
      />
    )}
    {isTextarea && (
      <TextareaField
        maxlength={textareaMaxlength}
        placeholder={textareaPlaceholder}
        desc={textareaDesc}
      />
    )}
    {isSelect && (
      <SelectField
        desc={selectDesc}
        id={selectId}
        isCategory={isCategory}
        options={selectOptions}
        onChange={selectOnChange}
      />
    )}
    {isPayment && (
      <PaymentField />
    )}
    {isDate && (
      <DateField />
    )}
    {isTooltip && (
      <Tooltip 
        text={tooltipText} 
        isVisible={tooltipIsVisible} 
      />
    )}
  </Field>
);
import React from "react";

import { Input } from "../../atoms/Input";
import { Title } from "../../atoms/Title";
import { Tooltip } from "../../atoms/Tooltip";

import { SelectField } from "../../molecules/SelectField";
import { TextareaField } from "../../molecules/TextareaField";

import { PaymentField } from "../PaymentField";
import DateField from "../DateField";

import { Field } from "./styles";

export const FormField = ({
  titleDesc,
  titleMandatory,
  data,
  desc,
  min,
  max,
  maxLength,
  placeholder,
  options,
  onChange,
  value,
  isInput,
  isSelect,
  isTextarea,
  isDate,
  isPayment,
  isTooltip,
  tooltipText,
  tooltipIsVisible,
}) => (
  <Field>
    <Title desc={titleDesc} mandatory={titleMandatory} />
    {isInput && (
      <Input
        data={data}
        desc={desc}
        type={data.type}
        placeholder={placeholder}
        onChange={onChange}
        min={min}
        max={max}
      />
    )}
    {isTextarea && (
      <TextareaField
        data={data}
        desc={desc}
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
    {isSelect && (
      <SelectField
        data={data}
        desc={desc}
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        value={value}
      />
    )}
    {isPayment && (
      <PaymentField data={data} onChange={onChange} />
    )}
    {isDate && ( 
      <DateField data={data} onChange={onChange} />
    )}
    {isTooltip && <Tooltip text={tooltipText} isVisible={tooltipIsVisible} />}
  </Field>
);

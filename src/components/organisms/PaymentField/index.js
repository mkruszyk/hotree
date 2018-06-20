import React from "react";

import { validate } from '../../../utils/validator';

import { NumberInput } from "../../atoms/NumberInput";
import { RadioInput } from "../../atoms/RadioInput";

import { Field, PaidEvent } from "./styles";

export const PaymentField = ({ 
  additionalData, 
  data, 
  onChange 
}) => {
  const { options, selectedValue } = data;
  const handleOnChange = (e) => {
    let payload = { ...data };
    payload.selectedValue = e.target.value
    onChange(payload);
    if (payload.selectedValue === 'freeEvent') {
      let event_fee = { ...additionalData }; 
      event_fee.isValid = validate(payload.selectedValue, additionalData.value);
      onChange(event_fee);
    }
  }

  const renderEventFee = (option) => {
    return (
      option === "paidEvent" && selectedValue === "paidEvent" && (
        <NumberInput
          id={additionalData.id}
          name={additionalData.id}
          data={additionalData}
          additionalData={data.selectedValue}
          desc="$"
          placeholder="Fee"
          onChange={onChange}
          type={additionalData.type}
          value={additionalData.value}
        />
      )
    );
  };
  return (
    <Field>
      {options.map(option => (
        <PaidEvent key={option.id}>
          <RadioInput
            key={option.id}
            id={option.id}
            name={option.id}
            checked={option.value === selectedValue}
            desc={option.desc}
            onChange={handleOnChange}
            value={option.value}
          />
          {renderEventFee(option.id)}
        </PaidEvent>
      ))}
    </Field>
  );
};

import React from "react";

import { Input } from "../../atoms/Input";
import { RadioField } from "../../molecules/RadioField";

import { Field, PaidEvent } from "./styles";

export const PaymentField = ({ data, onChange }) => {
  const { options, selectedValue, eventFee } = data;
  const renderConditionally = option => {
    if (option === "paidEvent") {
      return (
        selectedValue === "paidEvent" && (
          <Input
            id={eventFee.id}
            name={eventFee.id}
            data={eventFee}
            desc="$"
            placeholder="Fee"
            type={eventFee.type}
          />
        )
      );
    } else {
      return null;
    }
  };
  return (
    <Field>
      {options.map((option, id) => (
        <PaidEvent key={option.id}>
          <RadioField
            id={option.id}
            data={data}
            name={option.name}
            checked={option.value === selectedValue}
            desc={option.desc}
            onChange={onChange}
            value={option.value}
          />
          {renderConditionally(option.id)}
        </PaidEvent>
      ))}
    </Field>
  );
};

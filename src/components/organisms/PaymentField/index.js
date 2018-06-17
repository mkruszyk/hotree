import React from "react";

import { Input } from "../../atoms/Input";
import { RadioField } from "../../molecules/RadioField";

import { Field, PaidEvent } from "./styles";

export const PaymentField = ({ data, onChange }) => {
  const { options, selectedValue, eventFee } = data;
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
            {option.id === 'paidEvent' 
              ? (
                  <Input
                    isFeeVisible={selectedValue}
                    id={eventFee.id}
                    name={eventFee.id}
                    desc="$"
                    placeholder="Fee"
                    type={eventFee.type}
                    value={eventFee.value}
                  /> 
                ) 
              : null
            }
        </PaidEvent>
      ))}
    </Field>
  );
};

import React, { Component } from "react";

import { RadioField } from "../../molecules/RadioField";

import { Field, Container, RadioContainer, Input, Label } from "./styles";

export const DateField = ({ data, onChange }) => {
  const { selectedValue, options, date, time } = data;
  return (
    <Field>
      <Container>
        <Input
          id={date.id}
          data={data}
          name={date.id}
          min="data"
          type={date.type}
          onChange={onChange}
        />
        <Label>at</Label>
      </Container>
      <Container>
        <Input
          id={time.id}
          data={data}
          name={time.id}
          type={time.type}
          onChange={onChange}
        />
        <RadioContainer>
          {options.map(option => (
            <RadioField
              withLeftMargin={option.id === "am"}
              key={option.id}
              id={option.id}
              data={data}
              name={option.id}
              checked={option.value === selectedValue}
              desc={option.desc}
              onChange={onChange}
              value={option.value}
            />
          ))}
        </RadioContainer>
      </Container>
    </Field>
  );
};

export default DateField;

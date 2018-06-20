import React from "react";

import { validate } from '../../../utils/validator';

import { formatTime } from '../../../utils/formatTime';
import { RadioInput } from "../../atoms/RadioInput";

import { Field, Container, RadioContainer, DateTimeInput, Label } from "./styles";

export const DateField = (props) => {
  const getMinimumDate = () => (
    new Date().toISOString().slice(0, 10)
  );
  const handleTime = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const payload = { ...props.data };
    payload.time.value = value;
    const formatted = formatTime(payload);
    props.onChange(formatted);
    handleDateAndTime();
  };
  const handleDay = (e) => {
    e.preventDefault();
    const payload = { ...props.data };
    payload.day.value = e.target.value;
    props.onChange(payload);
    handleDateAndTime();
  };
  const handleAM_PM = (e) => {
    const { value } = e.target;
    const payload = { ...props.data };
    payload.selectedValue = value;
    const formatted = formatTime(payload);
    props.onChange(formatted);
  };
  const handleDateAndTime = () => {
    const payload = { ...props.data };
    payload.value = `${payload.day.value}T${payload.time.value}`;
    payload.isValid = validate(payload.id, payload.value);
    props.onChange(payload);
  }
  const { selectedValue, options, day, time } = props.data;
  return (
    <Field>
    <Container>
      <DateTimeInput
        id={day.id}
        data={props.data}
        name={day.id}
        min={getMinimumDate()}
        type={day.type}
        onChange={handleDay}
        onBlur={handleDateAndTime}
      />
      <Label>at</Label>
    </Container>
    <Container>
      <DateTimeInput
        id={time.id}
        data={props.data}
        min="01:00"
        max="12:59"
        name={time.id}
        type={time.type}
        onChange={handleTime}
        onBlur={handleDateAndTime}
      />
      <RadioContainer>
        {options.map(option => (
          <RadioInput
            withLeftMargin={option.id === "am"}
            key={option.id}
            id={option.id}
            name={option.id}
            checked={option.value === selectedValue}
            desc={option.desc}
            onChange={handleAM_PM}
            onClick={handleDateAndTime}
            value={option.value}
          />
        ))}
      </RadioContainer>
    </Container>
  </Field>
  );
}



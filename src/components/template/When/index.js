import React from "react";
// import PropTypes from "prop-types";

import { FormField } from "../../organisms/FormField";

import { Form, Header, InputContainer } from "./styles";

export const When = ({ data, onChange }) => {
  const { date, duration } = data;
  return (
  <Form>
    <Header>
      <h4>When</h4>
    </Header>
    <InputContainer>
      <FormField
        titleDesc="STARTS ON"
        titleMandatory="true"
        type="date"
        data={date}
        onChange={onChange}
        isError={date.isValid.status}
        errorInfo={date.isValid.info}
      />
      <FormField
        titleDesc="DURATION"
        type="numberInput"
        data={duration}
        onChange={onChange}
        desc="hour"
        placeholder="Number"
        isError={!false}
      />
    </InputContainer>
  </Form>
  );
};

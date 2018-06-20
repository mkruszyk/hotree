import React from "react";
// import PropTypes from "prop-types";

import employes from "../../../data/employes.json";

import { FormField } from "../../organisms/FormField";

import { Form, Header, InputContainer } from "./styles";

export const Coordinator = ({ data, onChange }) => {
  const { responsible, email } = data;
  return (
    <Form>
      <Header>
        <h4>Coordinator</h4>
      </Header>
      <InputContainer>
        <FormField
          titleDesc="RESPONSIBLE"
          titleMandatory="true"
          type="select"
          data={responsible}
          defaultValue={responsible.default}
          defaultInfo={"Me - "}
          email={email}
          options={employes}
          onChange={onChange}
          isError={!false}
        />
        <FormField
          titleDesc="EMAIL"
          type="input"
          data={email}
          placeholder="Email"
          onChange={onChange}
          isError={email.isValid.status}
          errorInfo={email.isValid.info}
        />
      </InputContainer>
    </Form>
  );
}

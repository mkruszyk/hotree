import React, { Component } from "react";
import PropTypes from "prop-types";

import { FormField } from "../../organisms/FormField";
import DateField from "../../organisms/DateField";

import { Form, Header, InputContainer } from "./styles";

class When extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form>
        <Header>
          <h4>When</h4>
        </Header>
        <InputContainer>
          <FormField
            titleDesc="DURATION"
            titleMandatory="true"
            isDate="true"
            isTooltip="true"
            tooltipText="Date and time cannot be empty"
            tooltipIsVisible="true"
          />
          <FormField
            titleDesc="DURATION"
            isInput="true"
            inputDesc="hour"
            inputId="duration"
            inputName="duration"
            inputPlaceholder="Number"
            inputType="number"
          />
        </InputContainer>
      </Form>
    );
  }
}

export default When;

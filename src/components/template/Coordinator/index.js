import React, { Component } from "react";
import PropTypes from "prop-types";

import { FormField } from '../../organisms/FormField';

import employes from '../../../data/employes.json';

import { Form, Header, InputContainer, InputBlock } from "./styles";

class Coordinator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Form>
        <Header>
          <h4>Coordinator</h4>
        </Header>
        <InputContainer>
          <FormField 
            titleDesc="RESPONSIBLE"
            titleMandatory="true"
            isSelect="true"
            selectId="responsible"
            selectOptions={employes}
            selectOnChange={"onChange"}
            selectDefault={"ja"}
          />
          <FormField 
            titleDesc="EMAIL"
            isInput="true"
            inputId="email"
            inputType="email"
            inputPlaceholder="Email"
            inputName="email"
            isTooltip="true"
            tooltipText="Invalid email format"
            tooltipIsVisible="true"
          />
        </InputContainer>
      </Form>
    );
  }
}

export default Coordinator;

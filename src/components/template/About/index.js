import React, { Component } from "react";
import PropTypes from "prop-types";

import { FormField } from '../../organisms/FormField';

import categories from '../../../data/categories.json';
import { Form, Header, InputContainer, InputBlock } from "./styles";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Form>
        <Header>
          <h4>About</h4>
        </Header>
        <InputContainer>
          <FormField 
            titleDesc="TITLE"
            titleMandatory="true"
            isInput="true"
            inputId="title"
            inputType="text"
            inputPlaceholder="Make it short and clear"
            inputName="title"
            isTooltip="true"
            tooltipText="Title cannot be empty"
            tooltipIsVisible="true"
          />
          <FormField 
            titleDesc="DESCRIPTION"
            titleMandatory="true"
            isTextarea="true"
            textareaMaxlength="140"
            textareaPlaceholder="Write about your event, be creative"
            textareaDesc="Max length 140 characters"
            isTooltip="true"
            tooltipText="Description cannot be empty"
            tooltipIsVisible="true"
          />
          <FormField 
            titleDesc="CATEGORY"
            isCategory="true"
            isSelect="true"
            selectId="category"
            selectDesc="Describes topic and people who should be interest in this event"
            selectOptions={categories}
            selectOnChange={"onChange"}
          />
          <FormField 
            titleDesc="PAYMENT"
            isPayment="true"
          />
          <FormField 
            titleDesc="REWARD"
            isInput="true"
            inputDesc="reward points for attendance"
            inputId="reward"
            inputMin="0"
            inputMax="10"
            inputName="reward"
            inputPlaceholder="Number"
            inputType="number"
          />
        </InputContainer>
      </Form>
    );
  }
}

export default About;

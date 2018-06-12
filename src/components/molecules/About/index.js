import React, { Component } from "react";
import PropTypes from "prop-types";

import { InputDescription } from "../../atoms/Label/index";
import { InputNumber, InputText, InputRadio } from "../../atoms/Inputs/index";
import Textarea from "../../atoms/Textarea/index";
import { InputTooltip } from "../../atoms/Tooltip/index";
import { Form, Title, InputContainer, InputBlock } from "./styles";

class About extends Component {
  render() {
    return (
      <Form>
        <Title>
          <h4>About</h4>
        </Title>
        <InputContainer>
          <InputBlock>
            <InputDescription desc="Title" />
            <InputText
              id="title"
              type="text"
              placeholder="Make it short and clear"
              name="title"
              onChange="test"
            />
            <InputTooltip text="Title cannot be empty" isVisible={false} />
          </InputBlock>
          <InputBlock>
            <InputDescription desc="description" />
            <Textarea
              maxlength="140"
              placeholder="Write about your event, be creative"
              desc="Max length 140 characters"
            />
            <InputTooltip />
          </InputBlock>
          <InputBlock>
            <InputDescription desc="category" />
            <InputText
              id="category"
              type="text"
              placeholder="Select category (skills, interests, locations)"
              name="category"
              onChange="test"
              italic="Describes topic and people who should be interest in this event"
            />
            <InputTooltip />
          </InputBlock>
          <InputBlock>
            <InputDescription desc="payment" />
            <InputRadio
              id="free-event"
              name="freeEvent"
              type="radio"
              checked="checked"
              desc="Free event"
            />
            <InputRadio
              id="paid-event"
              name="paidEvent"
              type="radio"
              desc="Paid event"
            />
            <InputTooltip />
          </InputBlock>
          <InputBlock>
            <InputDescription desc="reward" />
            <InputNumber
              id="reward"
              type="number"
              placeholder="Number"
              name="reward"
              onChange="test"
              min="0"
              max="10"
              desc="reward points for attendance"
            />
            <InputTooltip />
          </InputBlock>
        </InputContainer>
      </Form>
    );
  }
}

export default About;

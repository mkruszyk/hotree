import React, { Component } from "react";
import PropTypes from "prop-types";

import { InputDescription } from "../../atoms/Label/index";
import { InputTemplate } from "../../atoms/Inputs/InputText/index";
import { InputTooltip } from "../../atoms/Tooltip/index";
import { InputContainer, InputBlock } from "./styles";

class About extends Component {
  render() {
    return (
      <InputContainer>
        <InputBlock>
          <InputDescription desc="Title" />
          <InputTemplate
            id="title"
            type="text"
            placeholder="Make it short and clear"
            name="title"
            onChange="test"
          />
          <InputTooltip 
            text="Title cannot be empty"
            isVisible={false}
          />
        </InputBlock>
        <InputBlock>
          <InputDescription desc="description" />
          <InputTemplate
            id="description"
            type="text"
            placeholder="Write about your event, be creative"
            name="description"
            onChange="test"
            italic="Max length 140 characters"
          />
          <InputTooltip />
        </InputBlock>
        <InputBlock>
          <InputDescription desc="category" />
          <InputTemplate
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
          <InputTemplate
            id="payment"
            type="radio"
            placeholder="Make it short and clear"
            name="title"
            onChange="test"
            checked="checked"
          />
          <InputTemplate
            id="payment"
            type="radio"
            placeholder="Make it short and clear"
            name="title"
            onChange="test"
          />
          <InputTooltip />
        </InputBlock>
        <InputBlock>
          <InputDescription desc="reward" />
          <InputTemplate
            id="payment"
            type="number"
            placeholder="Number"
            name="title"
            onChange="test"
          />
          <InputTooltip />
        </InputBlock>
      </InputContainer>
    );
  }
}

export default About;

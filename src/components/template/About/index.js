import React, { Component } from "react";
import PropTypes from "prop-types";

import { Input } from '../../atoms/Input';
import { Title } from '../../atoms/Title';
import { Tooltip } from "../../atoms/Tooltip";

import { SelectField } from '../../molecules/SelectField';
import TextareaField from "../../molecules/TextareaField";

import PaymentField from "../../organisms/PaymentField";

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
          <InputBlock>
            <Title desc="Title" mandatory="true" />
            <Input
              id="title"
              type="text"
              placeholder="Make it short and clear"
              name="title"
            />
            <Tooltip text="Title cannot be empty" isVisible={true} />
          </InputBlock>
          <InputBlock>
            <Title desc="description" mandatory="true" />
            <TextareaField
              maxlength="140"
              placeholder="Write about your event, be creative"
              desc="Max length 140 characters"
            />
            <Tooltip text="Description cannot be empty" isVisible={true} />
          </InputBlock>
          <InputBlock>
            <Title desc="category" />
            <SelectField
              options={categories}
              desc="Describes topic and people who should be interest in this event"
              id="category"
              name="category"
              type="select"
            />
          </InputBlock>
          <InputBlock>
            <Title desc="payment" />
            <PaymentField />
          </InputBlock>
          <InputBlock>
            <Title desc="reward" />
            <Input
              id="reward"
              name="reward"
              placeholder="Number"
              min="0"
              max="10"
              desc="reward points for attendance"
              type="number"
            />
          </InputBlock>
        </InputContainer>
      </Form>
    );
  }
}

export default About;

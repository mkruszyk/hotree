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
    const { 
      title,
      description,
      category,
      payment,
      reward,
    } = this.props.data;
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
            data={title}
            onChange={this.props.onChange}
            placeholder="Make it short and clear"
            isTooltip={title.isValid}
            tooltipText="Title cannot be empty"
            tooltipIsVisible={title.isValid}
          />
          <FormField 
            titleDesc="DESCRIPTION"
            titleMandatory="true"
            isTextarea="true"
            data={description}
            desc="Max length 140 characters"
            maxLength="140"
            placeholder="Write about your event, be creative"
            onChange={this.props.onChange}
            isTooltip="true"
            tooltipText="Description cannot be empty"
            tooltipIsVisible={description.isValid}
          />
          <FormField 
            titleDesc="CATEGORY"
            isSelect="true"
            data={category}
            desc="Describes topic and people who should be interest in this event"
            options={categories}
            onChange={this.props.onChange}
            placeholder="Select category (skills, interests, locations)"
          />
          <FormField 
            titleDesc="PAYMENT"
            isPayment="true"
            data={payment}
            onChange={this.props.onChange}
          />
          <FormField 
            titleDesc="REWARD"
            isInput="true"
            desc="reward points for attendance"
            data={reward}
            min="0"
            max="10"
            placeholder="Number"
            onChange={this.props.onChange}
          />
        </InputContainer>
      </Form>
    );
  }
}

export default About;

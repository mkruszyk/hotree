import React, { Component } from "react";
import PropTypes from "prop-types";

import { FormField } from "../../organisms/FormField";

import { Form, Header, InputContainer } from "./styles";

class When extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      startsOn,
      duration
    } = this.props.data;
    return (
      <Form>
        <Header>
          <h4>When</h4>
        </Header>
        <InputContainer>
          <FormField
            titleDesc="STARTS ON"
            titleMandatory="true"
            isDate="true"
            data={startsOn}
            onChange={this.props.onChange}
            isTooltip="true"
            tooltipText="Date and time cannot be empty"
            tooltipIsVisible={startsOn.isValid}
          />
          <FormField
            titleDesc="DURATION"
            isInput="true"
            data={duration}
            onChange={this.props.onChange}
            desc="hour"
            placeholder="Number"
          />
        </InputContainer>
      </Form>
    );
  }
}

export default When;

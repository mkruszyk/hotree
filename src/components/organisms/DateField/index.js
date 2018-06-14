import React, { Component } from "react";
import moment from "moment";

import { RadioField } from "../../molecules/RadioField";

import { Field, Container, Input, Label } from "./styles";

class DateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      afterMidnight: true
    };
  }
  switchTime = () => {
    this.setState({
      afterMidnight: !this.state.afterMidnight
    });
  };
  render() {
    const { afterMidnight } = this.state;
    return (
      <Field>
        <Container>
          <Input
            id="date"
            name="date"
            min={moment().format("YYYY-MM-DD")}
            type="date"
          />
          <Label>at</Label>
        </Container>
        <Container>
          <Input id="hour" name="hour" type="time" />
          <RadioField
            withLeftMargin
            id="am"
            name="am"
            checked={!afterMidnight}
            desc="AM"
            onChange={this.switchTime}
          />
          <RadioField
            id="pm"
            name="pm"
            checked={afterMidnight}
            desc="PM"
            onChange={this.switchTime}
          />
        </Container>
      </Field>
    );
  }
}

export default DateField;

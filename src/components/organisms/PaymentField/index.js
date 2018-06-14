import React, { Component } from "react";

import { Input } from "../../atoms/Input";
import { RadioField } from "../../molecules/RadioField";

import { Field, PaidEvent } from "./styles";

class PaymentField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paidEvent: false
    };
  }
  switchPayment = () => {
    this.setState({
      paidEvent: !this.state.paidEvent
    });
  };

  render() {
    const { paidEvent } = this.state;
    return (
      <Field>
        <RadioField
          id="free-event"
          name="freeEvent"
          checked={!paidEvent}
          desc="Free event"
          onChange={this.switchPayment}
        />
        <PaidEvent>
          <RadioField
            id="paid-event"
            name="paidEvent"
            checked={paidEvent}
            desc="Paid event"
            onChange={this.switchPayment}
          />
          {paidEvent && (
            <Input
              desc="$"
              id="fee"
              name="fee"
              placeholder="Fee"
              type="number"
            />
          )}
        </PaidEvent>
      </Field>
    );
  }
}

export default PaymentField;

import React, { Component } from 'react';

import { Input } from '../../atoms/Input';
import { RadioField } from '../../molecules/RadioField';

import { Field } from './styles';

class PaymentField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paidEvent: false
    }
  }
  switchPayment = () => {
    this.setState({
      paidEvent: !this.state.paidEvent,
    });
  }

  render() {
    return (
      <Field>
        <RadioField
          id="free-event"
          name="freeEvent"
          checked={!this.state.paidEvent}
          desc="Free event"
          onChange={this.switchPayment}
        />
        <RadioField
          id="paid-event"
          name="paidEvent"
          checked={this.state.paidEvent}
          desc="Paid event"
          onChange={this.switchPayment}
        />
        <Input 
          desc="$"
          id="fee"
          name="fee"
          placeholder="Fee"
          type="number"
        />
      </Field>
    )
  }
}

export default PaymentField;

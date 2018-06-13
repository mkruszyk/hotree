import React, { Component } from 'react';

import { NumberField } from '../../molecules/NumberField';
import { RadioField } from '../../molecules/RadioField';


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
      <div>
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
        <NumberField 
          id="fee"
          name="fee"
          placeholder="Fee"
          desc="$"
        />
      </div>
    )
  }
}

export default PaymentField;

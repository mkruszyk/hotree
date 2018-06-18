import React, { Component } from "react";
import PropTypes from "prop-types";

import { FormField } from '../../organisms/FormField';

import employes from '../../../data/employes.json';

import { Form, Header, InputContainer } from "./styles";

class Coordinator extends Component {
  render() {
    const {
      responsible,
      email
    } = this.props.data

    return (
      <Form>
        <Header>
          <h4>Coordinator</h4>
        </Header>
        <InputContainer>
          <FormField 
            titleDesc="RESPONSIBLE"
            titleMandatory="true"
            isSelect="true"
            data={responsible}
            defaultValue={responsible.default}
            defaultInfo={'Me - '}
            email={email}
            options={employes}
            onChange={this.props.onChange}
          />
          <FormField 
            titleDesc="EMAIL"
            isInput="true"
            data={email}
            placeholder={"Email"}
            onChange={this.props.onChange}
            isTooltip="true"
            tooltipText="Invalid email format"
            tooltipIsVisible={email.isValid}
          />
        </InputContainer>
      </Form>
    );
  }
}

export default Coordinator;

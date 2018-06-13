import React, { Component } from "react";

import { Textarea } from '../../atoms/Textarea';

import { Field, TextareaDescription, Description } from "./styles";

class TextareaField extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      character: ''
    }
  }
  render() {
    return (
      <Field>
        <Textarea placeholder={this.props.placeholder} />
        <TextareaDescription>
          <Description>{this.props.desc}</Description>
          <Description>0/140</Description>
        </TextareaDescription>
      </Field>
    );
  }
}

export default TextareaField;

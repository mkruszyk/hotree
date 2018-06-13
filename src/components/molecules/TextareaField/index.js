import React, { Component } from "react";

import { Textarea } from '../../atoms/Textarea';
import { ItalicDescription } from '../../atoms/ItalicDescription';

import { TextareaContainer, TextareaDescription } from "./styles";

class TextareaField extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      character: ""
    }
  }
  render() {
    return (
      <TextareaContainer>
        <Textarea placeholder={this.props.placeholder} />
        <TextareaDescription>
          <ItalicDescription>{ this.props.desc }</ItalicDescription>
          <ItalicDescription>0/140</ItalicDescription>
        </TextareaDescription>
      </TextareaContainer>
    );
  }
}

export default TextareaField;

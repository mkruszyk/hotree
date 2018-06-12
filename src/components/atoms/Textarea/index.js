import React, { Component } from "react";

import { TextareaContainer, TextBox, TextDesc, TextCounter } from "./styles";

class Textarea extends Component {
  render() {
    return (
      <TextareaContainer>
        <TextBox placeholder={this.props.placeholder}/>
        <TextDesc>
          <span>{this.props.desc}</span>
          <span>0/140</span>
        </TextDesc>
      </TextareaContainer>
    );
  }
}

export default Textarea;

import React from 'react';
import { Label } from './styles';

export const InputDescription = (props) => (
  <Label for={props.desc}>{props.desc}</Label>
);

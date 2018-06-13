import React from 'react';
import { FieldTitle, Mandatory } from './styles';

export const Title = ({ desc, mandatory }) => (
  <FieldTitle>
    {desc}
    {mandatory && (<Mandatory>  *</Mandatory>)}
  </FieldTitle>
);
// name zamiast desc
import React from 'react';
import { FieldTitle, Mandatory } from './styles';

export const Title = ({ desc, mandatory, error }) => (
  <FieldTitle error={error}>
    {desc}
    {mandatory && (<Mandatory>  *</Mandatory>)}
  </FieldTitle>
);

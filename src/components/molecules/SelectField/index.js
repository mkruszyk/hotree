import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../atoms/Select';

import { Field, Description } from './styles';

const SelectField = ({ desc, ...other }) => (
  <Field>
    <Select
      {...other}
    />
    <Description>{desc}</Description>
  </Field>
);

SelectField.propTypes = {
  desc: PropTypes.string,
};

export default SelectField;

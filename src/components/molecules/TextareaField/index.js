import React from 'react';
import PropTypes from 'prop-types';

import { requiredDataPropType } from '../../../utils/constants';
import Textarea from '../../atoms/Textarea';

import { Field, TextareaDescription, Description } from './styles';

const TextareaField = ({
  data,
  desc,
  maxLength,
  error,
  onChange,
  placeholder,
}) => (
  <Field>
    <Textarea
      desc={desc}
      data={data}
      error={error}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
    />
    <TextareaDescription>
      <Description>{desc}</Description>
      <Description>{data.value.length}/{maxLength}</Description>
    </TextareaDescription>
  </Field>
);

TextareaField.propTypes = {
  data: requiredDataPropType,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  desc: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextareaField;

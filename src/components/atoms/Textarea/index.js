import React from 'react';
import PropTypes from 'prop-types';

import { requiredDataPropType } from '../../../utils/constants';

import { TextareaWrapper } from './styles';

const Textarea = props => (
  <TextareaWrapper
    id={props.data.id}
    type={props.data.type}
    error={props.error}
    onChange={e => props.onChange(e, props.data.toValidate)}
    maxLength={props.maxLength}
    placeholder={props.placeholder}
  />
);

Textarea.propTypes = {
  data: requiredDataPropType,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  maxLength: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Textarea;

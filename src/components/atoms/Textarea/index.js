import React from 'react';
import PropTypes from 'prop-types';

import { requiredDataPropType } from '../../../utils/constants';

import { TextareaWrapper } from './styles';

const Textarea = (props) => {
  const handleOnChange = (e) => {
    e.preventDefault(e);
    props.onChange(props.data, e.target.value);
  };
  return (
    <TextareaWrapper
      error={props.error}
      onChange={handleOnChange}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
    />
  );
};

Textarea.propTypes = {
  data: requiredDataPropType,
  maxLength: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Textarea;

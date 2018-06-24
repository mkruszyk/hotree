import React from 'react';
import PropTypes from 'prop-types';

import { Container, Radio, RadioDescription } from './styles';

const RadioInput = props => (
  <Container withLeftMargin={props.withLeftMargin}>
    <Radio
      id={props.id}
      name={props.name}
      type="radio"
      checked={props.checked}
      onChange={props.onChange}
      onClick={props.onClick}
      value={props.value}
    />
    <RadioDescription>
      {props.desc}
    </RadioDescription>
  </Container>
);

RadioInput.propTypes = {
  desc: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  withLeftMargin: PropTypes.bool,
  value: PropTypes.string,
};

export default RadioInput;

import React from 'react';
import PropTypes from 'prop-types';

import { FieldTitle, Mandatory } from './styles';

const Title = ({ desc, mandatory, error }) => (
  <FieldTitle error={error}>
    {desc}
    {mandatory && (<Mandatory>  *</Mandatory>)}
  </FieldTitle>
);

Title.propTypes = {
  desc: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  mandatory: PropTypes.string,
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';

import { TitleWrapper, Mandatory } from './styles';

const Title = ({ desc, mandatory, error }) => (
  <TitleWrapper error={error}>
    {desc}
    {mandatory && (<Mandatory>  *</Mandatory>)}
  </TitleWrapper>
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

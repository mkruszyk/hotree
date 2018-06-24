import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dataPropType, dateTimeFieldPropType } from '../../../utils/constants';

import FormField from '../../organisms/FormField';

import { Form, Header, InputContainer } from './styles';

const When = ({
  date,
  duration,
  handleInput,
  handleRadio,
  error,
}) => (
  <Form>
    <Header>
      <h4>When</h4>
    </Header>
    <InputContainer>
      <FormField
        titleDesc="STARTS ON"
        titleMandatory="true"
        type="date"
        data={date}
        handleInput={handleInput}
        handleRadio={handleRadio}
        isError={error.date}
      />
      <FormField
        titleDesc="DURATION"
        type="numberInput" // enum
        data={duration}
        onChange={handleInput}
        desc="hour"
        placeholder="Number"
      />
    </InputContainer>
  </Form>
);

const mapStateToProps = state => ({
  date: state.form.date,
  duration: state.form.duration,
});

When.propTypes = {
  date: dateTimeFieldPropType,
  duration: dataPropType,
  handleInput: PropTypes.func.isRequired,
  handleRadio: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default connect(mapStateToProps, null)(When);

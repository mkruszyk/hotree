import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import employes from '../../../data/employes.json';
import { dataPropType, requiredDataPropType } from '../../../utils/constants';

import FormField from '../../organisms/FormField';

import { Form, Header, InputContainer } from './styles';

const Coordinator = ({
  email, error, handleSelect, handleInput, responsible,
}) => (
  <Form>
    <Header>
      <h4>Coordinator</h4>
    </Header>
    <InputContainer>
      <FormField
        titleDesc="RESPONSIBLE"
        titleMandatory="true"
        type="selectData"
        otherData={email}
        data={responsible}
        defaultValue="Walter"
        defaultInfo="Me - "
        options={employes}
        onChange={handleSelect}
      />
      <FormField
        titleDesc="EMAIL"
        type="input"
        data={email}
        placeholder="Email"
        onChange={handleInput}
        isError={error.email}
      />
    </InputContainer>
  </Form>
);

const mapStateToProps = state => ({
  responsible: state.form.responsible,
  email: state.form.email,
});

Coordinator.propTypes = {
  responsible: dataPropType,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  email: requiredDataPropType,
  handleInput: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Coordinator);

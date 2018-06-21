import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import employes from '../../../data/employes.json';
import { dataPropType, requiredDataPropType } from '../../../utils/constants';

import FormField from '../../organisms/FormField';

import { Form, Header, InputContainer } from './styles';

const Coordinator = ({
  email, error, responsible, onChange,
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
        additionalData={email}
        data={responsible}
        defaultValue={3}
        defaultInfo="Me - "
        options={employes}
        onChange={onChange}
        isError={!false}
      />
      <FormField
        titleDesc="EMAIL"
        type="input"
        data={email}
        placeholder="Email"
        onChange={onChange}
        isError={error.email.status}
        errorInfo={error.email.info}
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
  error: PropTypes.object, // eslint-disable-line
  email: requiredDataPropType,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Coordinator);

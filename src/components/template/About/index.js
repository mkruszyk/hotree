import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dataPropType, requiredDataPropType, radioFieldPropType } from '../../../utils/constants';
import categories from '../../../data/categories.json';
import FormField from '../../organisms/FormField';

import { Form, Header, InputContainer } from './styles';

const About = ({
  title,
  description,
  category,
  paidEvent,
  error,
  eventFee,
  reward,
  onChange,
}) => (
  <Form>
    <Header>
      <h4>About</h4>
    </Header>
    <InputContainer>
      <FormField
        titleDesc="TITLE"
        titleMandatory="true"
        type="input"
        data={title}
        onChange={onChange}
        placeholder="Make it short and clear"
        isError={error.title.status}
        errorInfo={error.title.info}
      />
      <FormField
        titleDesc="DESCRIPTION"
        titleMandatory="true"
        type="textarea"
        data={description}
        desc="Max length 140 characters"
        maxLength="140"
        placeholder="Write about your event, be creative"
        onChange={onChange}
        isError={error.description.status}
        errorInfo={error.description.info}
      />
      <FormField
        titleDesc="CATEGORY"
        type="select"
        data={category}
        desc="Describes topic and people who should be interest in this event"
        defaultValue="default"
        options={categories}
        onChange={onChange}
        placeholder="Select category (skills, interests, locations)"
        isError={!false}
      />
      <FormField
        titleDesc="PAYMENT"
        type="payment"
        data={paidEvent}
        additionalData={eventFee}
        onChange={onChange}
        isError={error.eventFee.status}
        errorInfo={error.eventFee.info}
      />
      <FormField
        titleDesc="REWARD"
        type="numberInput"
        desc="reward points for attendance"
        data={reward}
        placeholder="Number"
        onChange={onChange}
        isError={!false}
      />
    </InputContainer>
  </Form>
);

const mapStateToProps = state => ({
  title: state.form.title,
  description: state.form.description,
  category: state.form.category,
  paidEvent: state.form.paidEvent,
  eventFee: state.form.eventFee,
  reward: state.form.reward,
});

About.propTypes = {
  title: requiredDataPropType,
  description: requiredDataPropType,
  category: dataPropType,
  paidEvent: radioFieldPropType,
  eventFee: requiredDataPropType,
  reward: dataPropType,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(About);

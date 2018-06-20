import React from "react";
// import PropTypes from "prop-types";

import { FormField } from "../../organisms/FormField";

import categories from "../../../data/categories.json";
import { Form, Header, InputContainer } from "./styles";

export const About = ({ data, onChange }) => {
  const { title, description, category, paid_event, event_fee, reward } = data;
  return (
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
        isError={title.isValid.status}
        errorInfo={title.isValid.info}
      />
      <FormField
        titleDesc="DESCRIPTION"
        titleMandatory="true"
        type="textarea"
        data={data.description}
        desc="Max length 140 characters"
        maxLength="140"
        placeholder="Write about your event, be creative"
        onChange={onChange}
        isError={description.isValid.status}
        errorInfo={description.isValid.info}
      />
      <FormField
        titleDesc="CATEGORY"
        type="select"
        data={category}
        desc="Describes topic and people who should be interest in this event"
        options={categories}
        onChange={onChange}
        placeholder="Select category (skills, interests, locations)"
        isError={!false}
      />
      <FormField
        titleDesc="PAYMENT"
        type="payment"
        data={paid_event}
        additionalData={event_fee}
        onChange={onChange}
        isError={event_fee.isValid.status}
        errorInfo={event_fee.isValid.info}
      />
      <FormField
        titleDesc="REWARD"
        type="numberInput"
        desc="reward points for attendance"
        data={reward}
        min="0"
        max="10"
        placeholder="Number"
        onChange={onChange}
        isError={!false}
      />
    </InputContainer>
  </Form>
  )
};

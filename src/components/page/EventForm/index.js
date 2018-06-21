import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setData, publishEvent } from '../../../store/actions/formActions';
import { setErrors } from '../../../store/actions/errorActions';
import { validate, validateEvent } from '../../../utils/validator';
import About from '../../template/About';
import Coordinator from '../../template/Coordinator';
import When from '../../template/When';
import Button from '../../atoms/Button';
import Container from './styles';
import Message from '../../atoms/Message';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }
  getDate = () => {
    const { day, time } = this.props.form;
    return `${day.value}T${time.value}`;
  };
  publishEvent = () => {
    const { form } = this.props;
    const newEvent = {
      title: form.title.value,
      description: form.description.value,
      category_id: form.category.value.id,
      paid_event: form.paidEvent.selected === 'paidEvent',
      event_fee: Number(form.eventFee.value),
      reward: Number(form.reward.value),
      duration: Number(form.duration.value),
      date: this.getDate(),
      coordinator: {
        email: form.email.value,
        id: form.responsible.value.id,
      },
    };
    const { isValid, errors } = validateEvent(newEvent);
    if (isValid) {
      console.log('newEvent: ', newEvent); // eslint-disable-line
      this.props.publishEvent(newEvent);
      this.setState({
        success: true,
      });
    } else {
      console.log('errors: ', errors); // eslint-disable-line
      this.isFormValid();
    }
  };
  isFormValid = () => {
    const { form } = this.props;
    this.props.setErrors(
      'title',
      validate('title', form.title.value),
    );
    this.props.setErrors(
      'description',
      validate('description', form.description.value),
    );
    this.props.setErrors(
      'paidEvent',
      validate(form.paidEvent.selected, form.eventFee.value),
    );
    this.props.setErrors(
      'email',
      validate('email', form.email.value),
    );
    this.props.setErrors(
      'date',
      validate('date', this.getDate()),
    );
  };
  handleOnChange = (data, value) => {
    if (data.type === 'radio') {
      this.props.setData(data.id, 'selected', value);
    } else {
      if (data.toValidate === true) {
        const validatedValue = validate(data.id, value);
        this.props.setErrors(data.id, validatedValue);
      }
      if (data.id === 'eventFee') {
        const validatedValue = validate(this.props.form.paidEvent.selected, value);
        this.props.setErrors(data.id, validatedValue);
      }
      this.props.setData(data.id, 'value', value);
    }
  }
  renderForm = () => (
    <Container>
      <About
        onChange={this.handleOnChange}
        error={this.props.errors}
      />
      <Coordinator
        onChange={this.handleOnChange}
        error={this.props.errors}
      />
      <When
        onChange={this.handleOnChange}
        error={this.props.errors}
      />
      <Button
        title="Publish event"
        onClick={this.publishEvent}
      />
    </Container>
  )
  renderSuccess = () => (
    <Container>
      <Message
        title="Success"
        info="Event has been created."
      />
    </Container>
  )
  render() {
    return (
      <div>
        { this.state.success ? this.renderSuccess() : this.renderForm() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
  errors: state.errors,
});

const mapDispatchToProps = {
  setData,
  publishEvent,
  setErrors,
};

EventForm.propTypes = {
  form: PropTypes.object.isRequired,  // eslint-disable-line
  errors: PropTypes.object, // eslint-disable-line
  publishEvent: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

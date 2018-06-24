import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setData, publishEvent } from '../../../store/actions/formActions';
import { setFieldError, setFormErrors } from '../../../store/actions/errorActions';
import { validateField, validateEvent } from '../../../utils/validator';
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
      this.props.setFormErrors(errors);
    }
  };
  handleInput = (e, toValidate) => {
    const {
      id, value,
    } = e.target;
    if (toValidate) {
      const validatedValue = validateField(id, value);
      this.props.setFieldError(id, validatedValue);
    }
    this.props.setData(id, 'value', value);
  }
  handleRadio = (id, e) => {
    const { value } = e.target;
    this.props.setData(id, 'selected', value);
  }
  handleSelect = (e, options) => {
    e.preventDefault();
    const { value, id } = e.target;
    const selected = options.find(item => item.name === (value));
    this.props.setData(id, 'value', selected);
  }
  renderForm = () => (
    <Container>
      <About
        handleInput={this.handleInput}
        handleSelect={this.handleSelect}
        handleRadio={this.handleRadio}
        error={this.props.errors}
      />
      <Coordinator
        handleInput={this.handleInput}
        handleSelect={this.handleSelect}
        error={this.props.errors}
      />
      <When
        handleInput={this.handleInput}
        handleSelect={this.handleSelect}
        handleRadio={this.handleRadio}
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
  setFieldError,
  setFormErrors,
};

EventForm.propTypes = {
  form: PropTypes.object.isRequired,  // eslint-disable-line
  errors: PropTypes.object, // eslint-disable-line
  publishEvent: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  setFormErrors: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

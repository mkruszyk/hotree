import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setData, setErrors, publishEvent } from '../../../store/actions/formActions';
import { validate, validateEvent } from '../../../utils/validator';
import { About } from '../../template/About';
import { Coordinator } from '../../template/Coordinator';
import { When } from '../../template/When';
import { Button } from '../../atoms/Button';
import { Container } from './styles';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
  }
  getDate = () => {
    const { date } = this.props.form;
    return `${date.day.value}T${date.time.value}`;
  }
  publishEvent = () => {
    const { form } = this.props;
    const newEvent = {
      title: form.title.value,
      description: form.description.value,
      category_id: form.category.value.id,
      paid_event: form.paid_event.selectedValue === 'paidEvent',
      event_fee: Number(form.event_fee.value),
      reward: Number(form.reward.value),
      duration: Number(form.duration.value),
      date: this.getDate(),
      coordinator: {
        email: form.email.value,
        id: form.responsible.value.id
      }
    }
    
    const { isValid, errors } = validateEvent(newEvent);
    if (isValid) {
      console.log('newEvent: ', newEvent);
      this.props.publishEvent(newEvent);
    } else {
      console.log('errors: ', errors);
      this.isFormValid();
    }
  };

  isFormValid = () => {
    const { form } = this.props;
    this.props.setErrors(
      'title', 
      validate('title', form.title.value)
    );
    this.props.setErrors(
      'description', 
      validate('description', form.description.value)
    );
    this.props.setErrors(
      form.paid_event.selectedValue,
      validate(form.paid_event.selectedValue, form.event_fee.value)
    );
    this.props.setErrors(
      'email',
      validate('email', form.email.value)
    );
    this.props.setErrors(
      'date',
      validate('date', this.getDate())
    );
  }
  render() {
    return (
      <Container>
        <About 
          onChange={this.props.setData}
          data={this.props.form}
          errors={this.state.errors}
        />
        <Coordinator 
          onChange={this.props.setData}
          data={this.props.form}
          errors={this.state.errors}
        />
        <When 
          onChange={this.props.setData}
          data={this.props.form}
          errors={this.state.errors}
        />
        <Button 
          title="Publish event"
          onClick={this.publishEvent}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    form: state.form,
    errors: state.errors
});

const mapDispatchToProps = {
  setData,
  publishEvent,
  setErrors,
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
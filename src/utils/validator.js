import isEmpty from '../utils/isEmpty';

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const DATE_REGEX = /(^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$)/;

export const validateField = (type, value, selected) => {
  let error = '';
  switch (type) {
    case 'title':
      if (isEmpty(value)) {
        error = 'Title cannot be empty';
      } break;
    case 'description':
      if (isEmpty(value)) {
        error = 'Description cannot be empty';
      } break;
    case 'eventFee':
      if (isEmpty(value) && selected === 'paidEvent') {
        error = 'Fee is required';
      } break;
    case 'date':
      if (value.length !== 16 && !DATE_REGEX.test(value)) {
        error = 'Fill date and time';
      } break;
    case 'email':
      if (isEmpty(value) || !EMAIL_REGEX.test(value)) {
        error = 'Enter correct email';
      } break;
    default:
      error = undefined;
  }
  return error;
};

export const validateEvent = (props) => {
  const errors = {};

  if (isEmpty(props.title)) {
    errors.title = 'Title cannot be empty';
  }

  if (isEmpty(props.description)) {
    errors.description = 'Description cannot be empty';
  }

  if (props.event_fee === 0 && props.paid_event === true) {
    errors.eventFee = 'Fee is required';
  }

  if (isEmpty(props.coordinator.email) || !EMAIL_REGEX.test(props.coordinator.email)) {
    errors.email = 'Enter correct mail';
  }

  if (isEmpty(props.date) || !DATE_REGEX.test(props.date)) {
    errors.date = 'Fill date and time';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

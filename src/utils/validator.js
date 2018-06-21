import isEmpty from '../utils/isEmpty';

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const DATE_REGEX = /(^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$)/;

export const validate = (type, value) => {
  switch (type) {
    case 'title':
      return {
        status: !isEmpty(value),
        info: 'Title cannot be empty',
      };
    case 'description':
      return {
        status: !isEmpty(value),
        info: 'Description is required',
      };
    case 'paidEvent':
      return {
        status: !isEmpty(value),
        info: 'Fee is required',
      };
    case 'freeEvent':
      return {
        status: true,
        info: 'Fee is required',
      };
    case 'date':
      return {
        status: (value.length === 16 && DATE_REGEX.test(value)),
        info: 'Fill date and time',
      };
    case 'email':
      return {
        status: !isEmpty(value) && EMAIL_REGEX.test(value),
        info: 'Enter correct email',
      };
    default:
      return null;
  }
};

export const validateEvent = (props) => {
  const errors = {};

  if (isEmpty(props.title)) {
    errors.title = 'Fill title';
  }

  if (isEmpty(props.description)) {
    errors.description = 'Fill description';
  }

  if (props.eventFee === 0 && props.paidEvent === true) {
    errors.eventFee = 'Fee is required';
  }

  if (isEmpty(props.coordinator.email) || !EMAIL_REGEX.test(props.coordinator.email)) {
    errors.email = 'Email is required';
  }

  if (isEmpty(props.date) || !DATE_REGEX.test(props.date)) {
    errors.date = 'Fill date and time';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

import { SET_DATA } from '../actions/actionTypes';

const initialState = {
  title: {
    id: 'title',
    type: 'text',
    toValidate: true,
    value: '',
  },
  description: {
    id: 'description',
    type: 'text',
    toValidate: true,
    value: '',
  },
  category: {
    id: 'category',
    type: 'select',
    value: '',
  },
  paidEvent: {
    id: 'paidEvent',
    type: 'radio',
    selected: 'freeEvent',
    options: [
      {
        id: 'freeEvent',
        desc: 'Free event',
        value: 'freeEvent',
      },
      {
        id: 'paidEvent',
        desc: 'Paid event',
        value: 'paidEvent',
      },
    ],
  },
  eventFee: {
    id: 'eventFee',
    type: 'number',
    value: '',
    toValidate: true,
  },
  reward: {
    id: 'reward',
    type: 'number',
    value: '',
  },
  responsible: {
    id: 'responsible',
    type: 'select',
    value: {
      name: 'Walter',
    },
  },
  email: {
    id: 'email',
    type: 'email',
    value: 'walter.nelson@hussa.rs',
    toValidate: true,
  },
  date: {
    id: 'date',
    type: 'date',
    value: '',
    toValidate: true,
  },
  midday: {
    id: 'midday',
    type: 'radio',
    selected: 'am',
    options: [
      {
        id: 'am',
        desc: 'AM',
        value: 'am',
      },
      {
        id: 'pm',
        desc: 'PM',
        value: 'pm',
      },
    ],
  },
  day: {
    id: 'day',
    type: 'date',
    value: '',
  },
  time: {
    id: 'time',
    type: 'time',
    value: '',
  },
  duration: {
    id: 'duration',
    type: 'number',
    value: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        [action.name]: { ...state[action.name], [action.key]: action.value },
      };
    default:
      return state;
  }
};

export default formReducer;

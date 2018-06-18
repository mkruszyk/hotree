import { SET_DATA } from '../../actions/actionTypes';

const initialState = {
  title: {
    id: 'title',
    type: 'text',
    isValid: true,
    value: '',
  },
  description: {
    id: 'description',
    type: 'text',
    isValid: true,
    value: '',
  },
  category: {
    id: 'category',
    type: 'select',
    value: '',
  },
  payment: {
    id: 'payment',
    selectedValue: 'freeEvent',
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
    eventFee: {
      id: 'eventFee',
      type: 'number',
      isValid: true,
      value: '',
    }
  },
  reward: {
    id: 'reward',
    type: 'number',
    value: '',
  },
  responsible: {
    id: 'responsible',
    default: 3,
    type: 'select',
    isValid: true,
    value: '',
  },
  email: {
    id: 'email',
    type: 'email',
    isValid: true,
    value: 'walter.nelson@hussa.rs',
  },
  startsOn: {
    id: 'startsOn',
    selectedValue: 'am',
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
      }
    ],
    date: {
      id: 'date',
      type: 'date',
      isValid: true,
    },
    time: {
      id: 'hour',
      type: 'time',
      isValid: true,
    },
  },
  duration: {
    id: 'duration',
    type: 'number',
    value: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DATA: {
      console.log('DEBUG action: ', action);
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    }
    default: {
      return state;

    }
  }
};

export default formReducer; 

export const initialState = {
  title: {
    id: 'title',
    type: 'text',
    isValid: {
      status: true,
      info: ''
    },
    value: '',
  },
  description: {
    id: 'description',
    type: 'text',
    isValid: {
      status: true,
      info: ''
    },
    value: '',
  },
  category: { 
    id: 'category',
    type: 'select',
    value: '',
  },
  paid_event: {
    id: 'paid_event',
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
  },
  event_fee: {
    id: 'event_fee',
    type: 'number',
    isValid: {
      status: true,
      info: ''
    },
    value: '',
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
    errorStatus: '',
    value: {
      id: 3
    },
  },
  email: {
    id: 'email',
    type: 'email',
    isValid: {
      status: true,
      info: ''
    },
    value: 'walter.nelson@hussa.rs',
  },
  date: {
    id: 'date',
    type: 'date',
    selectedValue: 'am',
    isValid: {
      status: true,
      info: ''
    },
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
  },
  duration: {
    id: 'duration',
    type: 'number',
    value: '',
  },
};
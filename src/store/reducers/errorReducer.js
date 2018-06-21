import { SET_ERRORS } from '../actions/actionTypes';

const initialState = {
  title: {
    status: true,
    info: '',
  },
  description: {
    status: true,
    info: '',
  },
  eventFee: {
    status: true,
    info: '',
  },
  email: {
    status: true,
    info: '',
  },
  date: {
    status: true,
    info: '',
  },
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        [action.name]: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;

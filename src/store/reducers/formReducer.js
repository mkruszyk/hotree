import { SET_DATA, SET_ERRORS } from '../actions/actionTypes';

import { initialState } from '../utils/constants/formInitialState';

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DATA:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case SET_ERRORS: {
        return {
        ...state,
        [action.name]: { ...state[action.name], isValid: action.payload }
      }
    }
    default:
      return state;
  }
};

export default formReducer; 

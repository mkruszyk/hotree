import { SET_FIELD_ERROR, SET_FORM_ERRORS } from '../actions/actionTypes';

const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD_ERROR:
      return {
        ...state,
        [action.name]: action.payload,
      };
    case SET_FORM_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;

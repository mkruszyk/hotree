import { PUBLISH_EVENT } from '../actions/actionTypes';

const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case PUBLISH_EVENT: {
      return {
        ...state,
        [action.payload.title]: action.payload,
      };
    }
    default:
      return state;
  }
};

export default eventReducer;

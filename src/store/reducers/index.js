import { combineReducers } from 'redux';
import formReducer from './formReducer';
import eventReducer from './eventReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  form: formReducer,
  event: eventReducer,
  errors: errorReducer,
});

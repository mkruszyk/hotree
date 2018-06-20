import { combineReducers } from 'redux';
import formReducer from './formReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  form: formReducer,
  event: eventReducer,
});
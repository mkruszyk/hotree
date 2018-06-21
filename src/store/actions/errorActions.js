import { SET_ERRORS } from './actionTypes';

/* eslint import/prefer-default-export: 0 */
export const setErrors = (name, payload) => ({
  type: SET_ERRORS,
  name,
  payload,
});

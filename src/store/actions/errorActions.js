import { SET_FIELD_ERROR, SET_FORM_ERRORS } from './actionTypes';

/* eslint import/prefer-default-export: 0 */
export const setFieldError = (name, payload) => ({
  type: SET_FIELD_ERROR,
  name,
  payload,
});

export const setFormErrors = payload => ({
  type: SET_FORM_ERRORS,
  payload,
});

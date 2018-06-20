import { SET_DATA, SET_ERRORS, PUBLISH_EVENT } from './actionTypes';

export const setData = function(payload) {
  return {
    type: SET_DATA,
    payload
  }
}

export const setErrors = function(name, payload) {
  return {
    type: SET_ERRORS,
    name,
    payload
  }
}

export const publishEvent = function(payload) {
  return {
    type: PUBLISH_EVENT,
    payload
  }
}
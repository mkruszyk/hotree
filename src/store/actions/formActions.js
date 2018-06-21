import { SET_DATA, PUBLISH_EVENT } from './actionTypes';

export const setData = (name, key, value) => ({
  type: SET_DATA,
  name,
  key,
  value,
});

export const publishEvent = payload => ({
  type: PUBLISH_EVENT,
  payload,
});

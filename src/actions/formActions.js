import { SET_DATA } from './actionTypes';

export const setData = function(payload) {
  return {
    type: SET_DATA,
    payload
  }
}
import {  FETCH_IMAGES, SET_IMAGES } from '../constants/action-types';

const initialState = {
  image: '',
};

export const imageReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_IMAGES:
      return {...state, image: payload};
    case FETCH_IMAGES:
      return {...state, image: payload};
    default:
      return state;
  }
};
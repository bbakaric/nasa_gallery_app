import { ActionTypes } from '../constants/action-types';

const initialState = {
  images: [],
};

export default function imageReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case ActionTypes.SEARCH_IMAGES:
      return {
        ...state,
         images: action.payload
      };
    default:
      return state;
  }
}
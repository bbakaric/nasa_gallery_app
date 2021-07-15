import { ActionTypes } from '../constants/action-types';

const initialState = {
  images: [],
};

export default function allImagesReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SEARCH_IMAGES:
      return {
        ...state,
         images: action.payload
      };
    case ActionTypes.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        images: []
      }
    default:
      return state;
  }
};
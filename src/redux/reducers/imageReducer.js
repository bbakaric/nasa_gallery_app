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
    default:
      return state;
  }
};
import { ActionTypes } from '../constants/action-types';

const initialState = {
  image: [],
};

export const selectedImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_IMAGE:
      return { 
        ...state,
        image: state.image.concat([action.payload])
      };
    case ActionTypes.DELETE_IMAGE:
      return {
        ...state,
        image: state.image.filter((image) => image.id !== action.payload)
      };
    case ActionTypes.EMPTY_FAVOURITES:
      return {
        ...state,
        image: []
      };
    default:
      return state;
  }
};
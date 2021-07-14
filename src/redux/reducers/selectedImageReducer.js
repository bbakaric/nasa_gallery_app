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
    default:
      return state;
  }
};
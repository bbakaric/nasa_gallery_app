import { ActionTypes } from '../constants/action-types';

const initialState = {
  image: [],
};

export default function imageReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SET_IMAGES:
      return {
        ...state,
        image: action.payload
      };
    case ActionTypes.FETCH_IMAGES:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
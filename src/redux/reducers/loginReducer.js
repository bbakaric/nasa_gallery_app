import { ActionTypes } from '../constants/action-types';

const initialState = {
    user: [
        {
            isLoggedIn: false
        }
    ]
};

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
      case ActionTypes.LOG_IN:
        return {
          ...state,
           user: action.payload
        };
      case ActionTypes.SIGN_OUT:
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  };
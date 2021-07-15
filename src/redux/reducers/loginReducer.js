import { ActionTypes } from '../constants/action-types';

const initialState = {
    user: [
        {
            email: '',
            password: '',
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
      default:
        return state;
    }
  };
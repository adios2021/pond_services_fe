import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  isPending: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOGIN_AUTH_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case ActionTypes.LOGIN_AUTH_SUCESS:
      return {
        ...state,
        isAuthenticated: true,
        isPending: false,
        user: payload
      };
    case ActionTypes.LOGIN_AUTH_FAILED:
      return {
        ...state,
        error: payload,
        isPending: false,
      };
    default:
      return state;
  }
}

export default reducer;
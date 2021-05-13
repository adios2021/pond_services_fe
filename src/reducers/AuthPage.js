import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  isPending: false,
  error: null,
  isAuthenticated: false,
  user: null,
  redirectTo: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOGIN_AUTH_REQUEST:
    case ActionTypes.GET_AUTH_PROFILE_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case ActionTypes.LOGIN_AUTH_SUCESS:
      return {
        ...state,
        isAuthenticated: true,
        isPending: false,
        error: null,
      };
    case ActionTypes.LOGIN_AUTH_FAILED:
    case ActionTypes.GET_AUTH_PROFILE_FAILED:
      return {
        ...state,
        error: payload,
        isPending: false,
      };

    case ActionTypes.GET_AUTH_PROFILE_SUCESS:
      return {
        ...state,
        isPending: false,
        user: payload
      };
    case ActionTypes.REDIRECT:
      return {
        ...state,
        isPending: false,
        redirectTo: payload
      };
    default:
      return state;
  }
}

export default reducer;
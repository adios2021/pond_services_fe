import * as ActionTypes from '../constants/actionTypes';
import API from '../helpers/api';
import { push } from 'connected-react-router';

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_AUTH_REQUEST});
    const formdata = {
      username: email,
      password,
      grant_type: 'password',
      client_id: 2,
      client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
    };
    // console.log('formdata', formdata);
    await API.auth
      .login(formdata)
      .then(async (res) => {
        const {data, access_token, refresh_token } = res;

        localStorage.setItem(
          'pond_services',
          JSON.stringify({
            accessToken: access_token,
            refreshToken: refresh_token,
          })
        );
        dispatch({
          type: ActionTypes.LOGIN_AUTH_SUCESS,
          payload: data,
        })
        dispatch(push('/dashboard'));
        window.location.reload(); //set temporarily
      })
      .catch((err) => {
        console.log('err', err);
        dispatch({
          type: ActionTypes.LOGIN_AUTH_FAILED,
          payload: {
            error: err.error,
          },
        });
      });
    return;
  };
}

export const logout = () => {
  return dispatch => {
    dispatch({type: ActionTypes.LOGOUT_AUTHENTICATION});
    localStorage.removeItem('pond_services');
    dispatch(push('/'));
    window.location.reload(); //set temporarily
  }
}

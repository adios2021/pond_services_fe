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
        dispatch(await profile(access_token));
        dispatch({
          type: ActionTypes.LOGIN_AUTH_SUCESS,
          payload: data,
        })
        dispatch(push('/dashboard'));
        // window.location.replace('/dashboard'); //set temporarily
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

export const profile = () => {
  return async (dispatch) => {
    dispatch({type: ActionTypes.GET_AUTH_PROFILE_REQUEST});

    await API.auth
      .profile()
      .then(async(res) => {
        localStorage.setItem('user_data', JSON.stringify(res));

        dispatch({type: ActionTypes.GET_AUTH_PROFILE_SUCESS, payload: res });
        window.location.replace('/dashboard'); //set temporarily

      })
      .catch((err) => {
        // if (JSON.parse(err).code === 401) {
        //   dispatch({ type: ActionTypes.RESET_REFRESH_TOKEN });
        // }
        dispatch({
          type: ActionTypes.GET_AUTH_PROFILE_FAILED,
          payload: {
            error: err.error,
          },
        });
      });
    
    return;
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({type: ActionTypes.LOGOUT_AUTHENTICATION});
    localStorage.removeItem('pond_services');
    localStorage.removeItem('user_data');
    dispatch(push('/'));
    window.location.replace('/'); //set temporarily
  }
}

export const redirect = link => {
  console.log("=== REDIRECT ACTION DISPATCHED ===");
  // return { type: REDIRECT, payload: link };
  return async (dispatch) => {
    dispatch({type: ActionTypes.REDIRECT, payload: link});
  }
};

import * as ActionTypes from '../constants/actionTypes';
import API from '../helpers/api';
import { push } from 'connected-react-router';
import moment from 'moment';

export const login = ({ email, password }) => {
    return async (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_AUTH_REQUEST});

        const response = API.auth.login(email, password);

        if (response.status !== 200) {
            dispatch({
                type: ActionTypes.LOGIN_AUTH_FAILED,
                payload: {
                    error: 'Login Error Message',
                }
            })

            return;
        }

        const { data, access_token } = response;
        dispatch({
            type: ActionTypes.LOGIN_AUTH_SUCESS,
            payload: data
        })

        localStorage.setItem(
            'app_name',
            JSON.stringify({
                accessToken: access_token,
                user: data,
                last_login: moment(),
            })
        )

        dispatch(push('/admin/dashboard'));
    };
}
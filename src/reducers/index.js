import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AuthPageReducer from './AuthPage';

const reducers = ( history ) =>
    combineReducers({
        router: connectRouter(history),
        AuthPageReducer,
    });

export default reducers;
import { connect } from 'react-redux';
import { login } from '../../actions/AuthPage';
import LoginPage from './LoginPage';
import { createBrowserHistory } from 'history';

const token = localStorage.getItem('pond_services');

const history = createBrowserHistory();
if (token) {
  history.push('/dashboard');
  window.location.reload();
}

const mapsDispatchToProps = (dispatch) => ({
    login(opts) {
        dispatch(login(opts));
    }
});

export default connect(null, mapsDispatchToProps)(LoginPage)
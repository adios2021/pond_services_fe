import { connect } from 'react-redux';
import { login } from '../../actions/AuthPage';
import LoginPage from './LoginPage';

const mapsDispatchToProps = (dispatch) => ({
    login(opts) {
        dispatch(login(opts));
    }
});

export default connect(null, mapsDispatchToProps)(LoginPage)
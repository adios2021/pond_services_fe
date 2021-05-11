import { createBrowserHistory } from 'history';
export { default } from './Signup';

const token = localStorage.getItem('pond_services');

const history = createBrowserHistory();
if (token) {
  history.push('/dashboard');
  window.location.reload();
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto';

import Routes from './routes';
import store from './store';
import theme from './theme';
import './assets/scss/index.scss';

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

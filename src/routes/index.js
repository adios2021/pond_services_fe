import React, { Suspense } from 'react';
import { 
  Switch,
  Route,
  Redirect,
  withRouter,
  Router as ReactRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';

import PageNotFound from '../layouts/404';
import { Loader } from '../components';

const token = localStorage.getItem('pond_services');

const PrivateRoute = (props) => {
  const { history, path, exact, layout, component, renderLoader, ...rest } = props;
  const Component = component;
  const Layout = layout;

  if (!token) {
    history.push('/');
  }

  console.log(path);
  return (
    <Route 
      key={0}
      path={path}
      exact={exact}
      render={(rest) => (
        <Suspense fallback={renderLoader()}>
          <Layout>
            <Component {...rest} />
          </Layout>
        </Suspense>
      )}
    />
  )
};
const history = createBrowserHistory();

const Routes = (props) => {
  const renderLoader = Loader;
  console.log('render', renderLoader());

  return (
    <ReactRouter history={history}>
    <Switch>
      {routes.map((route, key) => {
        const { path, exact, Layout, Component, isPrivate } = route;
        if (isPrivate) {
            return (
              <PrivateRoute
                key={0}
                path={path}
                exact={exact}
                layout={Layout}
                component={Component}
                renderLoader={renderLoader}
                history={history}
              />
            );
        } else {
          if (token) {
            history.push('/dashboard');
          }
          return ( 
            <Route 
              key={0}
              path={path}
              exact={exact}
              render={(props) => (
                <Suspense fallback={renderLoader()}>
                  <Layout>
                    <Component {...props} />
                  </Layout>
                </Suspense>
              )}
            />
          );
        }
      })}

      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
    </ReactRouter>
  );

}

export default Routes;
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

const PrivateRoute = () => {};
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
                  
                        />
                    );
                } else {
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
import React from 'react';
import { 
    Router as ReactRouter,
    Switch,
    Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageNotFound from '../layouts/404';

import routes from './routes';
import Public from './Public';

const history = createBrowserHistory();

const router = () => {
    return (
        <ReactRouter history={history}>
            <Switch>
                {routes.map((route, i) => {
                    return <Public exact key={i} {...route} />
                })}
                <Route path="*">
                    <PageNotFound />
                </Route>
        </Switch>
        </ReactRouter>
    );
}

export default router;
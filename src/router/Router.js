import React from 'react';
import { Router as ReactRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

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
            </Switch>
        </ReactRouter>
    );
}

export default router;
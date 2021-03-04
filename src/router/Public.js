import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Loader } from '../components';

const Public = (props) => {
    const { component, layout, ...rest } = props;
    console.log('component', component);
    const Layout = lazy(() => import(`../layouts/${layout}`));
    const Component = lazy(() => import(`../${component}`));
    const renderLoader = Loader;

    return (
        <Route
            {...rest}
            render={props => (
                <Suspense fallback={renderLoader()}>
                    <Layout>
                        <Component {...props} />
                    </Layout>
                </Suspense>
            )}
        >

        </Route>
    );
}

export default Public;
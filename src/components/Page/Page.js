import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Page = ({ title, children, ...rest }) => {
    return (
        <div {...rest}>
            <HelmetProvider>
                <Helmet defer={false}>
                    <title>{title} - AD-IOS Base Template</title>
                </Helmet>
            </HelmetProvider>
            {children}
        </div>
    );
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Page;
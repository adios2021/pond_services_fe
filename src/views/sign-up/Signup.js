import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import { Page } from '../../components/index';

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        }
    },
}));

const Signup = () => {
    const classes = useStyles();

    return (
        <Page title="Sign Up" className={classes.root}>
            <h1>SIGN-UP PAGE</h1>
        </Page>
    )
}

Signup.propTypes = {
    history: PropTypes.object,
}

export default Signup;
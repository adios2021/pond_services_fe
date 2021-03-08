import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Topbar from './components/Topbar'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 64,
        height: '100%',
    },
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    grid: {
        height: '100%'
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    qouteContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    qoute: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/images/laptop.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    qouteInner: {
        textAlign: 'center',
        flexBasis: '600px'
    },
    qouteText: {
        color: theme.palette.white,
        fontSize: '35px',
        fontWeight: 300,
    },
    name: {
        marginTop: theme.spacing(3),
        color: theme.palette.white,
    }
}));

const AuthLayout = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Topbar />
            <main className={classes.content}>
                <Grid className={classes.grid} container>
                    <Grid className={classes.qouteContainer} item lg={7}>
                        <div className={classes.qoute}>
                            <div className={classes.qouteInner}>
                                <Typography className={classes.qouteText} variant='h1'>
                                    Providing interactive and innovative solutions globally.
                                </Typography>
                                <Typography className={classes.name} variant='body1'>
                                    Made with love.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                
                    <Grid className={classes.content} item lg={5} xs={12}>
                        <div className={classes.contentBody}>{children}</div>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node,
}

export default AuthLayout;
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
    width: '100%',
  },
  grid: {
    height: '100%'
  },
  contentBody: {
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
}));

const CommonLayout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        <Grid className={classes.grid} container>
          <Grid className={classes.content} item lg={12} xs={12}>
            <div className={classes.contentBody}>{children}</div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

CommonLayout.propTypes = {
  children: PropTypes.node,
}

export default CommonLayout;
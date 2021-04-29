import React, {useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
    Button,
    Link,
    Typography,
    CircularProgress,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Page } from '../../components/index';
import { Dashboard } from '@material-ui/icons';

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
  title: {
    marginTop: theme.spacing(3),
  },
}));

const DashboardPage = (props) => {
  const classes = useStyles();
  return (
    <Page title="Dashboard" className={classes.root}>
      <h1>Dashboard Page</h1>
    </Page>
  );
}

DashboardPage.propTypes = {
    history: PropTypes.object,
}

export default DashboardPage;
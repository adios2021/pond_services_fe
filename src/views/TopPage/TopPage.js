import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
    Typography,
} from '@material-ui/core';

import { Page } from '../../components/index';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingBottom: 125,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }
  },
  title: {
    marginTop: theme.spacing(3),
  },
}));

const TopPage = (props) => {
  const classes = useStyles();
  return (
    <Page title="Top Page" className={classes.root}>
      <Typography>Top Page</Typography>
    </Page>
  );
}

TopPage.propTypes = {
    history: PropTypes.object,
}

export default TopPage;
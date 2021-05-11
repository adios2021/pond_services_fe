import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: '#0e1f44',
    paddingTop: '100px',
    paddingRight: '20px',
    paddingBottom: '100px',
    paddingLeft: '20px',
    borderRadius: 0,
  },
  boxBgcolor: {
    backgroundColor: '#102756!important',
  },
  boxTitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '21px',
    color: '#FFFFFF!important',
  }
}));

const FirstSection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item md={3} xs={12}>
        <Paper  className={classes.box}>
          <Typography className={classes.boxTitle}>
            More About Atlantic | OASE
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={3} xs={12}>
        <Paper
          className={
            classNames(
              classes.box,
              classes.boxBgcolor
          )}
        >
          <Typography className={classes.boxTitle}>
            What's an APC?
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={3} xs={12}>
        <Paper  className={classes.box}>
          <Typography className={classes.boxTitle}>
            Find APC'S NEAR Your
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={3} xs={12}>
        <Paper
          className={
            classNames(
              classes.box,
              classes.boxBgcolor
          )}
        >
          <Typography className={classes.boxTitle}>
            Contact atlantic OASE
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
 
export default FirstSection;
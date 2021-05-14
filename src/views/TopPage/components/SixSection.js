import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 219px 52px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
    }
  },
  logo: {
    padding: '30px 0',
  },
  h3: {
    padding: '27px 0',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#000000!important',
    paddingBottom: 10,
    lineHeight: '1em',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
      fontSize: 25,
    }
  },
  h4: {
    fontWeight: '700!important',
    textTransform: 'uppercase',
    fontSize: '22px',
    color: '#000000!important',
    paddingBottom: 10,
    lineHeight: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    }
  },
  p: {
    padding: '27px 0',
    lineHeight: '1.9em',
    color: '#000000!important',
    paddingBottom: '1em',
  },
  button: {
    color: '#fff!important',
    backgroundColor: '#0e1f44!important',
    fontWeight: '700!important',
    letterSpacing: 2,
    padding: '10px 15px',
    [theme.breakpoints.down('sm')]: {
      margin: 10,
    }
  },
  box: {
    width: '80%!important',
    padding: '51px 15px!important',
  },
  small: {
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#024B79!important',
    }
  },
  description: {
    padding: '27px 0',
  }
}));

const SixSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid item xs={12} container style={{marginTop: 30}}>
          <Grid item xs={12} md={4}>
            <Button className={classNames(classes.button, classes.box)}>WANT IT PROFESSIONALLY INSTALLED?</Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button className={classNames(classes.button, classes.box)}>LEARN MORE ABOUT INSTALLATION SERVICES</Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button className={classNames(classes.button, classes.box)}>POND & WATER FEATURE CONTRACTOR?</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <Typography variant="h3" className={classes.h3}>​LEARN MORE ABOUT ATLANTIC | OASE’S ​APC </Typography>
          <Typography variant="h4" className={classes.h4}>PROFESSIONAL ​CONTRACTOR PROGRAM!</Typography>
        </Grid>

        <Grid item container>
          <Grid item xs={12}>
          <Button className={classNames(classes.button, classes.small)}>What's An APC?</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
 
export default SixSection;
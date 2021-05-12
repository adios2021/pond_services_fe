import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import classNames from 'classnames';

// assets
import atlantic from '../../../assets/images/atlantic.jpg';
import atlantic2 from '../../../assets/images/atlantic2.jpg';
const useStyles = makeStyles(theme => ({
  logo: {
    padding: '30px 0',
  },
  h3: {
    padding: '27px 0',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '30px',
    color: '#000000!important',
    paddingBottom: 10,
    lineHeight: '1em',
  },
  h4: {
    fontWeight: '700!important',
    textTransform: 'uppercase',
    fontSize: '22px',
    color: '#000000!important',
    paddingBottom: 10,
    lineHeight: '1em',
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
      <div style={{padding: '0 219px 52px', margin: 'auto'}}>
        <Grid item xs={12} container style={{marginTop: 30}}>
          <Grid xs={12} md={4}>
            <Button className={classNames(classes.button, classes.box)}>WANT IT PROFESSIONALLY INSTALLED?</Button>
          </Grid>
          <Grid xs={12} md={4}>
            <Button className={classNames(classes.button, classes.box)}>LEARN MORE ABOUT INSTALLATION SERVICES</Button>
          </Grid>
          <Grid xs={12} md={4}>
            <Button className={classNames(classes.button, classes.box)}>POND & WATER FEATURE CONTRACTOR?</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <Typography variant="h3" className={classes.h3}>​LEARN MORE ABOUT ATLANTIC | OASE’S ​APC </Typography>
          <Typography variant="h4" className={classes.h4}>PROFESSIONAL ​CONTRACTOR PROGRAM!</Typography>
        </Grid>

        <Grid item container>
          <Grid xs={12}>
          <Button className={classNames(classes.button, classes.small)}>What's An APC?</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
 
export default SixSection;
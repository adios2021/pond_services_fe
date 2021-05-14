import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

// assets
import pondicon from '../../../assets/images/pondicon-01.png';
import img from '../../../assets/images/apc-awg-oase-orig_orig.png';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px 219px 50px',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      padding: '0 16px',
    }
  },
  h3: {
    padding: '27px 0',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#fff!important',
    paddingBottom: 10,
    lineHeight: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
    }
  },
  h5: {
    fontWeight: '700!important',
    textTransform: 'uppercase',
    fontSize: '18px',
    color: '#fff!important',
    paddingBottom: 10,
    lineHeight: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  company: {
    display: 'flex',
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    }
  },
  p: {
    lineHeight: '1.9em',
    color: '#fff!important',
    paddingBottom: '1em',
  }
}));

const FourthSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12} className={classes.fourtTitle}>
        <Typography variant="h3" className={classes.h3}>BROWSE OUR (IA) CONTRACTOR LISTINGS</Typography>
        <Typography variant="h5" className={classes.h5}>ATLANTIC | OASE PROFESSIONAL CONTRACTORS IN IOWA</Typography>
      </Grid>
      <Grid item container className={classes.company}>
        <Grid item xs={12} md={6}>
          <img src={pondicon} style={{maxWidth: '25%', height: 'auto',}}/>
          <Typography className={classes.h5}>Your Company Here</Typography>
          <Typography className={classes.h5}></Typography>
          <Typography className={classes.h5}>123 Main Street</Typography>
          <Typography className={classes.p}>
            Your Town, Your County, Iowa (IA) 12345
          </Typography>
          <Typography className={classes.h5} style={{height: 25}}></Typography>
          <Typography className={classes.h5}>CONTACT US Or Call 123.456.7899</Typography>
          <Typography className={classes.p}>
          PRIMARY SERVICES AREAS- Town (A), Town (B), Town (C)<br />
          ​* Atlantic – Oase Professional Contractor
          </Typography>
          <img src={img} style={{marginTop: '2.5%', padding: 10, background: '#fff', maxWidth: '40%', height: 'auto',}}/>
        </Grid>
        <Grid item xs={12} md={6}>
        <img src={pondicon} style={{maxWidth: '25%', height: 'auto',}}/>
          <Typography className={classes.h5}>Your Company Here</Typography>
          <Typography className={classes.h5}></Typography>
          <Typography className={classes.h5}>123 Main Street</Typography>
          <Typography className={classes.p}>
            Your Town, Your County, Iowa (IA) 12345
          </Typography>
          <Typography className={classes.h5} style={{height: 25}}></Typography>
          <Typography className={classes.h5}>CONTACT US Or Call 123.456.7899</Typography>
          <Typography className={classes.p}>
            PRIMARY SERVICES AREAS- Town (A), Town (B), Town (C)<br />
            ​* Atlantic – Oase Professional Contractor
          </Typography>
          <img src={img} style={{marginTop: '2.5%', padding: 10, background: '#fff', maxWidth: '40%', height: 'auto',}}/>
        </Grid>
      </Grid>
    </div>
  );
}
 
export default FourthSection;
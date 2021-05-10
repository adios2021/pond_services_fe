import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

// assets
import pondicon from '../../../assets/images/pondicon-01.png';
import img from '../../../assets/images/apc-awg-oase-orig_orig.png';
const useStyles = makeStyles(theme => ({
  h3: {
    padding: '27px 0',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '30px',
    color: '#fff!important',
    paddingBottom: 10,
    lineHeight: '1em',
  },
  h5: {
    fontWeight: '700!important',
    textTransform: 'uppercase',
    fontSize: '18px',
    color: '#fff!important',
    paddingBottom: 10,
    lineHeight: '1em',
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
    <div style={{margin: '20px 219px 50px'}}>
      <Grid item xs={12} className={classes.fourtTitle}>
        <Typography variant="h3" className={classes.h3}>BROWSE OUR (IA) CONTRACTOR LISTINGS</Typography>
        <Typography variant="h5" className={classes.h5}>ATLANTIC | OASE PROFESSIONAL CONTRACTORS IN IOWA</Typography>
      </Grid>
      <Grid item container style={{display: 'flex', marginTop: 30}}>
        <Grid xs={12} md={6}>
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
        <Grid xs={12} md={6}>
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
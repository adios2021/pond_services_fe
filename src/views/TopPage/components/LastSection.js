import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

// assets
import img from '../../../assets/images/apc-awg-oase-orig_orig.png';
const useStyles = makeStyles(theme => ({
  p: {
    lineHeight: '1.9em',
    color: '#000000!important',
  },
  description: {
    padding: '27px 0 1em',
  }
}));

const LastSection = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{padding: '0 219px 52px', margin: 'auto'}}>
        <Grid item xs={12}style={{marginTop: 30}}>
          <Grid xs={12}>
            <img src={img} style={{maxWidth: '25%', height: 'auto',}}/>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <Typography className={classes.p}>THE COMPANIES LISTED ON THIS SITE ARE NOT AN EMPLOYEE, AGENT, OR IN ANY OTHER WAY ASSOCIATED WITH THE P-O-N-D.S.</Typography>
          <Typography className={classes.p}>ANY SALE, AGREEMENT OR CONTRACT YOU REACH WITH A COMPANY YOU MAY FIND ON THIS SITE IS SOLELY BETWEEN YOU AND</Typography>
          <Typography className={classes.p}>THE COMPANY.</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.p}>PLEASE REFER TO OUR ABOUT US, PRIVACY POLICY AND TERMS OF USE SERVICE FOR DETAILS</Typography>
        </Grid>
      </div>
    </>
  );
}
 
export default LastSection;
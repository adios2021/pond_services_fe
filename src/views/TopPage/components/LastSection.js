import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

// assets
import img from '../../../assets/images/apc-awg-oase-orig_orig.png';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 219px 52px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
    }
  },
  p: {
    lineHeight: '1.9em',
    color: '#000000!important',
  },
  description: {
    padding: '27px 0 1em',
  },
  img: {
    maxWidth: '25%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60s%',
    }
  }
}));

const LastSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid item xs={12}style={{marginTop: 30}}>
          <Grid item xs={12}>
            <img className={classes.img} src={img}/>
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
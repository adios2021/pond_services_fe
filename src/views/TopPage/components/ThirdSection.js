import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';
import classNames from 'classnames';

// assets
import img from '../../../assets/images/apc-awg-oase-orig_orig.png';

const useStyles = makeStyles(theme => ({
  logo: {
    padding: '30px 0',
  },
  h3: {
    padding: '27px 0',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '30px',
    color: '#0e1f44!important',
    paddingBottom: 10,
    lineHeight: '1em',
  },
  h5: {
    fontWeight: '700!important',
    textTransform: 'uppercase',
    fontSize: '18px',
    color: '#000000!important',
    paddingBottom: 10,
    lineHeight: '1em',
  },
  p: {
    padding: '27px 0',
    lineHeight: '1.9em',
    color: '#000000!important',
    paddingBottom: '1em',
    margin: '0 219px'
  }
}));

const ThirdSection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.logo}>
        <img src={img} style={{maxWidth: '100%', height: 'auto',}}/>
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Typography variant="h3" className={classes.h3}>( IA ) – LOCAL ATLANTIC | <span style={{color: '#01598f',}}>OASE WATER GARDENS</span></Typography>
        <Typography variant="h5" className={classes.h5}>PROFESSIONAL APPROVED POND & WATER FEATURE CONTRACTOR MEMBER DIRECTORY</Typography>
        <Typography className={classes.p}>
          Welcome to the P.O.N.D.Services Iowa (IA) ATLANTIC | OASE PROFESSIONAL CONTRACTORS network page.
        </Typography>
        <Typography className={classes.p}>
        All Of Atlantic | Oase’s Network Members are passionate about creating one of a kind Fish Ponds, Fountains & Pond-Free Waterfalls for your Iowa outdoor living area. Their professionalism and belief in customer service combined with an unbridled passion for Water Features and Knowledge of the Atlantic | Oase Water Gardens Product Line allows them to assist their customers in turning their dreams into reality. If you’re considering having a water feature like a fish pond, disappearing “pond free” waterfall, formal waterfall spillway, landscape bubbling garden fountain, installed or adding some led water feature lighting to enjoy them at night as well – This also includes lake aeration & rainwater harvesting systems – then the contractors servicing Iowa (IA) listed on this page should be your first source for doing research. All of our member listings have contact pages that allow you to upload photos of your yard or project area. This will help our contractor members have some ideas ready for your space when they call you to help give you approximate costs.
        Do you know a company that isn’t listed on our locator? Tell them they need to be on P.O.N.D.S. and we’ll handle the rest!
        </Typography>
      </Grid>
    </>
  );
}
 
export default ThirdSection;
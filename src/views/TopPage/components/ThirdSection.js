import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

// assets
import img from '../../../assets/images/apc-awg-oase-orig_orig.png';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 219px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
      margin: 'auto',
    }
  },
  logo: {
    padding: '30px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0',
    },
    '& img': {
      [theme.breakpoints.down('sm')]: {
        maxWidth: '60%!important',
      }
    }
  },
  h3: {
    padding: '27px 0',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#0e1f44!important',
    paddingBottom: 10,
    lineHeight: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      padding: '20px 0',
    }
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
  }
}));

const ThirdSection = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
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
        </Typography>
        <Typography>
          Do you know a company that isn’t listed on our locator? Tell them they need to be on P.O.N.D.S. and we’ll handle the rest!
        </Typography>
      </Grid>

      <Grid item container style={{marginTop: 30}}>
        <Grid item xs={6} md={3}>
          <img src={image1} style={{maxWidth: '85%', height: 'auto',}}/>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={image2} style={{maxWidth: '85%', height: 'auto',}}/>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={image3} style={{maxWidth: '85%', height: 'auto',}}/>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src={image4} style={{maxWidth: '85%', height: 'auto',}}/>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
 
export default ThirdSection;
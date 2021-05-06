import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
// material ui
import {
    Typography,
    Grid,
    Button
} from '@material-ui/core';

import { Page } from '../../components/index';
// assets
import img from '../../assets/images/apc-awg-oase-orig_orig.png';

// components
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

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
  banner: {
    marginTop: '42px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'radial-gradient(circle at center,rgba(255,255,255,0.81) 0%,rgba(2,75,121,0.9) 100%),url(/images/banner.jpg)',    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: '15vw',
    paddingBottom: '15vw',
    overflow: 'hidden',
  },
  bannerContent: {
    padding: '27px 0',
  },
  bannerButton: {
    backgroundColor: '#FFFFFF',
    color: '#0e1f44',
    borderWidth: '3px!important',
    borderColor: '#FFFFFF',
    borderRadius: '5px',
    letterSpacing: '2px',
    fontSize: '16px',
    fontFamily: 'Montserrat, Helvetica,Arial,Lucida,sans-serif!important',
    fontWeight: '700!important',
    textTransform: 'uppercase!important',
    width: '170px',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#024B79',
    }
  },
  firstSection: {

  },
  secondSection: {
    padding: '54px 0',
  },
  thirdSection: {
    backgroundColor: '#F2F2F2',
    padding: '50px 0',
  }
}));

const TopPage = (props) => {
  const classes = useStyles();
  return (
    <Page title="Top Page" className={classes.root}>
      <div
        className={classes.banner}
      >
        <Grid container spacing={2} className={classes.bannerContent}>
          <Grid item xs={12} style={{marginBottom: 15}}>
            <img src={img} style={{maxWidth: '100%', height: 'auto',}}/>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.bannerButton}>LEARN MORE</Button>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        className={classes.firstSection}
      >
        <FirstSection />
      </Grid>
      <Grid
        container
        className={classes.secondSection}
      >
        <SecondSection />
      </Grid>
      <Grid
        container
        className={classes.thirdSection}
      >
        <ThirdSection />
      </Grid>
    </Page>
  );
}

TopPage.propTypes = {
  history: PropTypes.object,
}

export default TopPage;
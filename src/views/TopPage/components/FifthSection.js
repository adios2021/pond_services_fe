import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

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
  },
  button: {
    color: '#fff!important',
    backgroundColor: '#0e1f44!important',
    fontWeight: '700!important',
    letterSpacing: 2,
    padding: '10px 15px',
  },
  question: {
    backgroundColor: '#0e1f44',
    padding: '30px 0',
    width: '100%',
  },
  questionText: {
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '22px',
    color: '#FFFFFF!important',
    textAlign: 'left',
  },
  questionButton: {
    padding: '10px 15px',
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
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#024B79!important',
    }
  }
}));

const FifthSection = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{margin: '0 219px 52px'}}>
        <Grid item xs={12} className={classes.description}>
          <Typography variant="h3" className={classes.h3}>​ATLANTIC | <span style={{color: '#01598f',}}>OASE PRODUCT LINKS</span></Typography>
          <Typography variant="h5" className={classes.h5}>ON POND-RETAILER.SERVICES</Typography>
          <Typography className={classes.p}>
          FOUNTAIN | FORMAL SPILLWAY | POND-FREE | WATER GARDEN | PUMPS | INSTALLATION | LIGHTING | MAINTENANCE | POND & LAKE | ​RAIN HARVESTING
          </Typography>
        </Grid>

        <Grid item container style={{marginTop: 30}}>
          <Grid xs={12} md={4}>
            <img src={atlantic} style={{maxWidth: '85%', height: 'auto',}}/>
          </Grid>
          <Grid xs={12} md={4}>
            <img src={atlantic} style={{maxWidth: '85%', height: 'auto',}}/>
          </Grid>
          <Grid xs={12} md={4}>
            <img src={atlantic2} style={{maxWidth: '85%', height: 'auto',}}/>
          </Grid>
        </Grid>

        <Grid item container style={{marginTop: 30, padding: '27px 0'}}>
          <Grid xs={12} md={6}>
            <Button className={classes.button}>Find An Installer Near You</Button>
          </Grid>
          <Grid xs={12} md={6}>
            <Button className={classes.button}>Installation & Maintenance Services</Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.question}>
        <Grid item container style={{width: '70%', margin: 'auto'}}>
          <Grid xs={12} md={6} style={{justifyContent: 'center', margin: 'auto'}}>
            <Typography className={classes.questionText}>
              GOT ANY QUESTION? SEND US A MESSAGE.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
          <Button className={classes.questionButton}>Find An Installer Near You</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
 
export default FifthSection;
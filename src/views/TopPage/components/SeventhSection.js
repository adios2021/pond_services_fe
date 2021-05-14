import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

// assets
import img from '../../../assets/images/Ponds-Contractor-Services.png';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 219px 50px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
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
    marginBottom: '2.75%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
    }
  },
  h5: {
    fontWeight: '700!important',
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#fff!important',
    paddingBottom: 10,
    lineHeight: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  p: {
    lineHeight: '1.9em',
    color: '#fff!important',
    paddingBottom: '1em',
  },
  ul: {
    textAlign: 'left',
    lineHeight: '1.9em',
    color: '#fff!important',
    paddingBottom: '1em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 30,
    }
  },
  button: {
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
}));

const SeventSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={img} style={{maxWidth: '50%', height: 'auto',}}/>
      <Grid item xs={12} className={classes.fourtTitle}>
        <Typography variant="h3" className={classes.h3}>​DOES YOUR BUSINESS SERVICE ANY OF THE FOLLOWING AREAS IN IOWA (IA)?</Typography>
        <Typography variant="h5" className={classes.h5}>COUNTIES IN IOWA​</Typography>
      </Grid>
      <Grid item container style={{display: 'flex', marginTop: 30}}>
        <Grid item xs={6} md={2}>
          <ul className={classes.ul}>
            <li>Adair</li>
            <li>Adams</li>
            <li>Allamakee</li>
            <li>Appanoose</li>
            <li>Audubon</li>
            <li>Benton</li>
            <li>Black Hawk</li>
            <li>Boone</li>
            <li>Bremer</li>
            <li>Buchanan</li>
            <li>Buena Vista</li>
            <li>Butler</li>
            <li>Calhoun</li>
            <li>Carroll</li>
            <li>Cass</li>
            <li>Cedar</li>
            <li>Cerro Gordo</li>
            <li>Cherokee</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={2}>
          <ul className={classes.ul}>
            <li>Chickasaw</li>
            <li>Clarke</li>
            <li>Clay</li>
            <li>Clayton</li>
            <li>Clinton</li>
            <li>Crawford</li>
            <li>Dallas</li>
            <li>Davis</li>
            <li>Decatur</li>
            <li>Delaware</li>
            <li>Des Moines</li>
            <li>Dickinson</li>
            <li>Decatur</li>
            <li>Delaware</li>
            <li>Des Moines</li>
            <li>Dickinson</li>
            <li>Dubuque</li>
            <li>Emmet</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={2}>
          <ul className={classes.ul}>
            <li>Fayette</li>
            <li>Floyd</li>
            <li>Franklin</li>
            <li>Fremont</li>
            <li>Greene</li>
            <li>Grundy</li>
            <li>Guthrie</li>
            <li>Hamilton</li>
            <li>Hancock</li>
            <li>Delaware</li>
            <li>Des Moines</li>
            <li>Henry</li>
            <li>Howard</li>
            <li>Humboldt</li>
            <li>Ida</li>
            <li>Iowa</li>
            <li>Jackson</li>
            <li>Jasper</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={2}>
          <ul className={classes.ul}>
            <li>Jefferson</li>
            <li>Johnson</li>
            <li>Jones</li>
            <li>Keokuk</li>
            <li>Greene</li>
            <li>Grundy</li>
            <li>Guthrie</li>
            <li>Hamilton</li>
            <li>Hancock</li>
            <li>Delaware</li>
            <li>Des Moines</li>
            <li>Henry</li>
            <li>Howard</li>
            <li>Humboldt</li>
            <li>Ida</li>
            <li>Mitchell</li>
            <li>Monona</li>
            <li>Monroe</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={2}>
          <ul className={classes.ul}>
            <li>Montgomery</li>
            <li>Muscatine</li>
            <li>O’Brien</li>
            <li>Osceola</li>
            <li>Palo Alto</li>
            <li>Plymouth</li>
            <li>Guthrie</li>
            <li>Hamilton</li>
            <li>Hancock</li>
            <li>Delaware</li>
            <li>Des Moines</li>
            <li>Henry</li>
            <li>Howard</li>
            <li>Scott</li>
            <li>Shelby</li>
            <li>Sioux</li>
            <li>Story</li>
            <li>Tama</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={2}>
          <ul className={classes.ul}>
            <li>Taylor</li>
            <li>Union</li>
            <li>Van Buren</li>
            <li>Wapello</li>
            <li>Warren</li>
            <li>Washington</li>
            <li>Wayne</li>
            <li>Webster</li>
            <li>Winnebago</li>
            <li>Winneshiek</li>
            <li>Woodbury</li>
            <li>Worth</li>
            <li>Wright</li>
          </ul>
        </Grid>
        <Grid item xs={12} style={{paddingTop: '50px'}}>
          <Button className={classes.button}>LEARN MORE</Button>
        </Grid>
      </Grid>
    </div>
  );
}
 
export default SeventSection; 
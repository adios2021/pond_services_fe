import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';

import map from '../../../assets/images/map.png';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto!important',
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
    }
  },
  description: {
    padding: '27px 0',
  },
  h3: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 30,
    lineHeight: '1em',
    paddingBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
    }
  },
  h4: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 22,
    lineHeight: '1em',
    paddingBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    }
  },
  p: {
    lineHeight: '1.9em',
    color: '#000000!important',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    }
  }
}));

const SecondSection = () => {
  const classes = useStyles();
  
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "//code.metalocator.com/index.php?option=com_locator&view=directory&layout=_javascript&framed=1&format=raw&tmpl=component&no_html=1&Itemid=12210";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid item xs={12} className={classes.description}>
          <Typography variant="h3" className={classes.h3}>IOWA (IA)</Typography>
          <Typography variant="h4" className={classes.h4}>ATLANTIC | OASE PROFESSIONAL CONTRACTORS</Typography>
          <Typography className={classes.p}>LOCAL POND / WATER GARDEN CONTRACTORS, & DESIGNERS/BUILDERS/INSTALLERS</Typography>
          <Typography className={classes.p}>WE HAVE 0 IOWA MEMBER POND CONTRACTORS/BUILDERS FOR YOU TO REVIEW!!</Typography>
        </Grid>
        <Grid item xs={12}>
          <div id="locator_loading12210" style={{display: 'none'}}>
              <img alt="Loading..." width="16" height="16" src="https://cdn.metalocator.com/images/ajax-loader.gif" />
          </div>
          <div id="ml___wrapper12210"></div>
          <img src={map} style={{maxWidth: '70%', height: 'auto',}}/>
        </Grid>
      </div>
    </>
  );
}
 
export default SecondSection;
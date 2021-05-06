import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  description: {
    padding: '27px 0',
  },
    
}));

const SecondSection = () => {
  const classes = useStyles();
  
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "//code.metalocator.com/index.php?option=com_locator&view=directory&layout=_javascript&framed=1&format=raw&tmpl=component&no_html=1&Itemid=12210";
    script.async = true;

    document.body.appendChild(script);
  }, []);
  const map = () => {
    return (
      <div>
        <script language="javascript" src="//code.metalocator.com/index.php?option=com_locator&view=directory&layout=_javascript&framed=1&format=raw&tmpl=component&no_html=1&Itemid=12210"></script>
        {/* { window.google.load("maps", "3",{other_params:"sensor=false"}) } */}

      </div>
    );
  }
  return (
    <>
      <Grid item xs={12} className={classes.description}>
        <Typography variant="h3" className={classes.h3}>IOWA (IA)</Typography>
        <Typography variant="h4" className={classes.h4}>ATLANTIC | OASE PROFESSIONAL CONTRACTORS</Typography>
        <Typography className={classes.p}>LOCAL POND / WATER GARDEN CONTRACTORS, & DESIGNERS/BUILDERS/INSTALLERS</Typography>
        <Typography className={classes.p}>WE HAVE 0 IOWA MEMBER POND CONTRACTORS/BUILDERS FOR YOU TO REVIEW!!</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* {map()} */}
        <div id="locator_loading12210" style={{display: 'none'}}>
            <img alt="Loading..." width="16" height="16" src="https://cdn.metalocator.com/images/ajax-loader.gif" />
        </div>
        <div id="ml___wrapper12210"></div>
      </Grid>
    </>
  );
}
 
export default SecondSection;
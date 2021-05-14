import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import logo from '../../../assets/images/ad-ios-logo.png';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '27px 0',
    backgroundColor: '#000000!important',
  },
  content: {
    width: '80%',
    maxWidth: '1080px',
    color: '#FFFFFF!important',
    textAlign: 'center',
    margin: 'auto',
  },
  AdiosLogo: {
    height: '30px',
    width: '110px',
    display: 'inline-block!important',
    marginLeft: '-16px',
    position: 'relative',
    marginBottom: '-7px',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <Typography>
          Copyright © 2021 P.O.N.D.Services & Atlantic | Oase, All rights reserved.
          <a href="https://ad-ios.com" target="_blank" rel="noopener noreferrer">   <img src={logo} alt="company logo" className={classes.AdiosLogo}/></a>
        </Typography>
      </div>
    </footer>
  )
}

export default Footer;
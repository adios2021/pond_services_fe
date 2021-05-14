import { Link } from 'react-router-dom';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import img from '../../../assets/images/apc-awg-oase-orig_orig.png';

const useStyles = makeStyles((theme) => ({
    root: {
      boxShadow: 'none',
      height: '11%',
      justifyContent: 'center',
    },
    image: {
      width: '25%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    link: {
      textDecoration: 'none',
      width: '58.5%',
    },
    title: {
      flexGrow: 1,
      color: theme.palette.white,
      fontSize: '24px'
    },
  }));

const Topbar = (props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
        color='default'
        position='fixed'
      >
        <Toolbar style={{justifyContent: 'center',}}>
          <Link to='/' className={classes.link}>
              <div className={classes.image}>
                <img src={img} style={{maxWidth: '100%', height: 'auto',}}/>
              </div>
          </Link>
        </Toolbar>
      </AppBar>
    );
}

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
import clsx from 'clsx'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
// @material-ui/core components
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      boxShadow: 'none',
    },
    link: {
      textDecoration: 'none',
    },
    title: {
      flexGrow: 1,
      color: theme.palette.white,
      fontSize: '24px'
    },
  }));

const Header = (props) => {
    // const { className, ...rest } = props;
    const { className } = props;

    const classes = useStyles();

    return (
      <AppBar
        className={clsx(classes.root, className)}
        color='primary'
        position='fixed'
      >
        <Toolbar>
          {/* <Link to='/' className={classes.link}>
              <Typography variant="h4" className={classes.title}>
                AD-IOS Base Template
              </Typography>
          </Link> */}
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handledrawertoggle}
              edge="start"
              className={classes.menuButton}
          >
              <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
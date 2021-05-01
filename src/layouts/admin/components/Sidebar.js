import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// styles
import styles from './Style';


const useStyles = makeStyles(styles);

const Sidebar = (props) => {
    const classes = useStyles();

    const links = (
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KeyboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Keyboard"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
          />
        </ListItem>
      </List>
    );

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div
        className={classNames(
          classes.userBox,
          !props.open && classes.hide
        )}
      >
        <Avatar className={classes.large} />
        <Typography variant="subtitle1">User</Typography>
      </div>
      <div
        className={classNames(
            classes.userMobileBox,
            props.open && classes.hide
        )}
      >
        <Avatar className={classes.small} />
      </div>
      <Divider />
      {links}
    </Drawer>
  );
};

Sidebar.propTypes = {
  handledrawertoggle: PropTypes.func,
  open: PropTypes.bool,
};

export default Sidebar;

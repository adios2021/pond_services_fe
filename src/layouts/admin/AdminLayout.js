import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import Header from './components/Header';
import Sidebar from './components/Sidebar'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 64,
    height: '100%',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  grid: {
    height: '100%'
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
  },
  qouteContainer: {
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
  },
  qoute: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/laptop.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  qouteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  qouteText: {
    color: theme.palette.white,
    fontSize: '35px',
    fontWeight: 300,
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white,
  },
  outerContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
  },
  innerContent: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '64px',
  }
}));

const AdminLayout = (props) => {
  const { children } = props;
  const classes = useStyles();
  
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleDrawerToggle = () => {
      setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={classes.root}>
      <Header 
        handledrawertoggle={handleDrawerToggle}
        open={sidebarOpen}
      />
      <Sidebar
        handledrawertoggle={handleDrawerToggle}
        open={sidebarOpen}
      />
      <main className={classes.outerContent}>
          <div
            className={classes.innerContent}
            style={{padding: sidebarOpen
              ? '24px 24px 24px 173px'
              : '24px'
            }}
          >
              <Typography component="div">
                {children}
              </Typography>
          </div>
      </main>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
}

export default AdminLayout;
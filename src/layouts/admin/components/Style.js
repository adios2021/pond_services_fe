const drawerWidth = 240;

const sidebarStyle = theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      marginTop: 70,
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
    },
    userBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 16px',
      minHeight: '130px',
      justifyContent: 'center',
    },
    userMobileBox: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    hide: {
      display: 'none',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
});

export default sidebarStyle;
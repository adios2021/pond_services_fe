import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/Error';
// styles
import {
  defaultFont,
  whiteColor,
  successColor,
  dangerColor,
} from '../../assets/jss/mainStyle';

const useStyles = makeStyles(theme => ({
  root: {
    ...defaultFont,
  },
  icon: {
    display: 'block',
    left: '15px',
    position: 'absolute',
    top: '50%',
    marginTop: '-15px',
    width: '30px',
    height: '30px'
  },
  iconButton: {
    width: '24px',
    height: '24px',
    padding: '0px'
  },
  iconMessage: {
    paddingLeft: '50px',
    display: 'block',
    fontSize: '12px'
  },
  close: {
    width: '11px',
    height: '11px'
  },
  message: {
    padding: '0',
    display: 'block',
    maxWidth: '100%'
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
  },
}));

const NotificationAlert = (props) => {
  const classes = useStyles();

  const {
    message,
    type,
    open,
    handleNotificationToggle,
    align = 'center',
  } = props;

  const colorClasses = classNames({
    [classes.success]: type === 'success',
    [classes.danger]: type === 'error',
  });

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: align,
    }}
      open={open}
      autoHideDuration={type === 'success' ? 3000 : 5000}
      message={
        <div>
          {type === 'error' ? (
            <Error className={classes.icon} />
          ) : null}
          {type === 'success' ? (
            <CheckCircle className={classes.icon} />
          ) : null}
          <span className={classes.iconMessage}>{message}</span>
        </div>
      }
      action={[
        <IconButton
          className={classes.iconButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleNotificationToggle}
        >
          <Close className={classes.close} />
        </IconButton>,
      ]}
      onClose={handleNotificationToggle}
      ContentProps={{
        classes: {
          root: classes.root + ' ' + colorClasses,
          message: classes.message,
        },
      }}
    />
  );
};

NotificationAlert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  open: PropTypes.bool,
  handleNotificationToggle: PropTypes.func,
};

export default NotificationAlert;

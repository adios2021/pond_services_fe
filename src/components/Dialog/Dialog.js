import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog as CustomDialog } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(theme => ({
  customDialog: {
    '& .MuiDialog-paperWidthSm': {
      width: '600px',
      height: '500px',
    }
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Dialog = (props) => {
  const classes = useStyles();
  const { open, handleClickOpenDialog, handleCloseDialog } = props;
  // const [open, setOpen] = React.useState(openModal false);

  // const handleClickOpen = () => {
  //   handleClickOpenDialog();
  // };
  const handleClose = () => {
    handleCloseDialog();
  };

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Field
      </Button> */}
      <CustomDialog className={classes.customDialog} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </CustomDialog>
    </div>
  );
}

Dialog.propTypes = {
  // settings: PropTypes.object,
  open: PropTypes.bool,
  handleClickOpenDialog: PropTypes.func,
  handleCloseDialog: PropTypes.func,
};

export default Dialog;
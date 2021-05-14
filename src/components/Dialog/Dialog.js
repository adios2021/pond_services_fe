import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog as CustomDialog } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
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
  button: {
    margin: '25px!important',
  },
});

const useStyles = makeStyles(theme => ({
  customDialog: {
    '& .MuiButtonBase-root': {
      margin: 8
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

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

const Dialog = (props) => {
  const classes = useStyles();
  const { open, handleCloseDialog, handleAddField } = props;

  const handleClose = () => {
    handleCloseDialog();
  };

  const handleSetField = (component) => {
    handleAddField(component);
    handleCloseDialog();
  }

  return (
    <div>
      <CustomDialog className={classes.customDialog} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Choose Field
        </DialogTitle>
        <DialogContent dividers>
          <Button className={classes.button} variant="outlined" onClick={() => handleSetField('textField')}>Text Field</Button>
          <Button className={classes.button} variant="outlined" onClick={() => handleSetField('textArea')}>Text Area</Button>
          <Button className={classes.button} variant="outlined" onClick={() => handleSetField('file')}>Image Upload</Button>
        </DialogContent>
      </CustomDialog>
    </div>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool,
  handleCloseDialog: PropTypes.func,
  handleAddField: PropTypes.func,
};

export default Dialog;
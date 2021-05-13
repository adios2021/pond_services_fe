import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  IconButton,
  FormControl,
  Input,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: 8,
  },
  formControl: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 16
  },
  textArea: {
    width: '90%',
    height: '250px',
  },
  textField: {
    width: '90%',
  },
  file: {
    width: 250
  }
}));

const Form = React.memo((props) => {
  const classes = useStyles();
  const { 
    fields,
    handleChangeInput,
    handleRemoveField,
    handleClickOpenDialog,
    handleSubmit
  } = props;

  return (
    <>
      <form>
        {
          fields.map((field, index) => {
            if (field.component === 'textArea') {
              return (
                <div key={index}>
                  <FormControl className={classes.formControl}>
                    <textarea
                      className={classes.textArea}
                      name="content"
                      value={field.content}
                      onChange={event => handleChangeInput(index, event)}
                    />
                    <IconButton
                      onClick={() => handleRemoveField(index)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {
                      fields.length - 1 === index &&
                      <IconButton
                        onClick={handleClickOpenDialog}
                      >
                        <AddIcon/>
                      </IconButton>
                    }
                  </FormControl>
                </div>
              )
            }

            if (field.component === 'textField') {
              return (
                <div key={index}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      className={classes.textField}
                      name="content"
                      label="Add Content"
                      variant="outlined"
                      value={field.content}
                      onChange={event => handleChangeInput(index, event)}
                    />
                    <IconButton
                      onClick={() => handleRemoveField(index)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {
                      fields.length - 1 === index &&
                      <IconButton
                        onClick={handleClickOpenDialog}
                      >
                        <AddIcon/>
                      </IconButton>
                    }
                  </FormControl>
                </div>
              )
            }

            if (field.component === 'file') {
              return (
                <div key={index}>
                  <FormControl className={classes.formControl}>
                    <Button
                      variant="contained"
                      component="label"
                      endIcon={<AddPhotoAlternateIcon />}
                      className={classes.file}
                    >
                      Upload File
                      <input
                        accept='image/*'
                        type="file"
                        hidden
                      />
                      {/* <Input
                        accept='image/*'
                        id='contained-button-file'
                        type='file'
                        disableUnderline
                      /> */}
                    </Button>
                    <IconButton
                      onClick={() => handleRemoveField(index)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {
                      fields.length - 1 === index &&
                      <IconButton
                        onClick={handleClickOpenDialog}
                      >
                        <AddIcon/>
                      </IconButton>
                    }
                  </FormControl>
                </div>
              )
            }
            return;
            // if (field.component === 'textArea') {
            //   return (
            //     <div key={index}>
            //       <FormControl className={classes.formControl}>
            //         <TextField
            //           className={classes.textField}
            //           name="content"
            //           label="Add Content"
            //           variant="outlined"
            //           value={field.content}
            //           onChange={event => handleChangeInput(index, event)}
            //         />
            //         <IconButton
            //           onClick={() => handleRemoveField(index)}
            //         >
            //           <RemoveIcon />
            //         </IconButton>
            //         {
            //           fields.length - 1 === index &&
            //           <IconButton
            //             onClick={handleClickOpenDialog}
            //           >
            //             <AddIcon/>
            //           </IconButton>
            //         }
            //       </FormControl>
            //     </div>
            //   )
            // }

          })
        }
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </>
  );
});
 
Form.propTypes = {
  fields: PropTypes.array,
  handleChangeInput: PropTypes.func,
  handleRemoveField: PropTypes.func,
  handleClickOpenDialog: PropTypes.func,
  handleSubmit: PropTypes.func,
  // children: PropTypes.node,
};

export default Form;
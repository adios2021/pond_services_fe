import React from 'react';
import {
  Typography,
  Button,
  Grid,
  TextField,
  IconButton,
  TextareaAutosize,
  FormControl,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/styles';
import { Dialog } from '../../components';

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
  },
  textField: {
    width: '90%',
  }
}));
const Guest = () => {
  const classes = useStyles();
  const [fields, setFields] = React.useState([
    { component: 'textArea', content: '' },
    { component: '', content: '' },
    { component: 'textArea', content: '' },
    { component: '', content: '' },
  ])

  const [open, setOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleAddField = () => {
    setFields([...fields, {component: '', content: ''}]);
  }

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  }

  const handleChangeInput = (index, e) => {
    const values = [...fields];
    values[index][e.target.name] = e.target.value;
    setFields(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('fields', fields);
  }

  return (
    <React.Fragment>
      <Grid container style={{
        textAlign: 'center', 
        padding: '5em 3em',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography align="center" variant="h4">
          Welcome, Guest
        </Typography>
        {/* <Button className={classes.button} variant="contained" color="primary"> Add Field</Button> */}

        <Grid item xs={12} style={{marginTop: 50}}>
          <form>
            {
              fields.map((field, index) => {
                if (field.component === 'textArea') {
                  return (
                    <div key={index}>
                      <FormControl className={classes.formControl}>
                        <TextareaAutosize
                          className={classes.textArea}
                          aria-label="minimum height" 
                          rowsMin={10} 
                          placeholder="Minimum 10 rows" 
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
        </Grid>
      </Grid>
      <Dialog 
        open={open} 
        handleClickOpenDialog={handleClickOpenDialog} 
        handleCloseDialog={handleCloseDialog}
      />
    </React.Fragment>
  );
}

export default Guest;
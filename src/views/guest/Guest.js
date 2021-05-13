import React from 'react';
import {
  Typography,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import { Dialog } from '../../components';

import Form from './Form';

const useStyles = makeStyles(theme => ({}));

const Guest = () => {
  const classes = useStyles();
  const [fields, setFields] = React.useState([
    // { component: 'textArea', content: '' },
    { component: 'textField', content: '' },
    // { component: 'textArea', content: '' },
  ])

  const [open, setOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleAddField = (name) => {
    console.log('component', name);
    setFields([...fields, {component: name, content: ''}]);
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

  const form = () => {
    return (
      <Form
        fields={fields}
        handleChangeInput={handleChangeInput}
        handleRemoveField={handleRemoveField}
        handleClickOpenDialog={handleClickOpenDialog}
        handleSubmit={handleSubmit}
      />
    )
  };

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
        <Grid item xs={12} style={{marginTop: 50}}>
          {form()}
        </Grid>
      </Grid>
      <Dialog 
        open={open} 
        handleClickOpenDialog={handleClickOpenDialog} 
        handleCloseDialog={handleCloseDialog}
        handleAddField={handleAddField}
      />
    </React.Fragment>
  );
}

export default Guest;
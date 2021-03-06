import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const PageNotFound = () => {
    let location = useLocation();
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography variant='h3'>
                No match for <code>{location.pathname}</code>
            </Typography>
            </Grid>
        </Grid>
      </div>
    );
}

export default PageNotFound;
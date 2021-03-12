import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Container,
  Button
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    boldText: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 600,
    }
}));

const PageNotFound = () => {
    let location = useLocation();
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid className={classes.paper} container spacing={3}>
            <Grid item xs={12}>
              <main>
              <div className={classes.heroContent}>
                <Container maxWidth="sm">
                  <Typography 
                    className={classes.boldText}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    404
                  </Typography>
                  <Typography 
                    className={classes.boldText}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    Page not found
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    We're sorry, the page you requested could not be found. Please go background
                    to the home page or contact us at <span className={classes.boldText}>support@ad-ios.com</span>
                  </Typography>
                </Container>
                </div>
              </main>
            </Grid>
        </Grid>
      </div>
    );
}

export default PageNotFound;
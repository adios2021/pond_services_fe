import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import MUIDataTable from "mui-datatables";

import { Page } from '../../components/index';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }
  },
  title: {
    marginTop: theme.spacing(3),
  },
}));

const columns = ["Page Title", "Body", "Date Created", "Actions"];

const data = [
 ["Page Name 1", "Array", "2021-07-28", "Edit | Delete"],
 ["Page Name 2", "Array", "2021-07-28", "Edit | Delete"],
];

const options = {
  filterType: 'checkbox',
};

const PageManagement = (props) => {
  const classes = useStyles();
  return (
    <Page title="Page Management" className={classes.root}>
      <h1 style={{padding: '15px 0'}}>Page Management</h1>
      <MUIDataTable
        title={"Page Management List"}
        data={data}
        columns={columns}
        options={options}
      />
    </Page>
  );
}

PageManagement.propTypes = {
    history: PropTypes.object,
}

export default PageManagement;
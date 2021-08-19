import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = '25%';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: 'none',
  },
  gridContainer: {
    margin: '6% 15% 0% 15%',
    height: '80vh',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: '0',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fafafa',
    border: '0',
    top: '9%',
  },
  listItem: {
    marginLeft: '40%',
    color: '#131313',
  },
}));

export default useStyles;

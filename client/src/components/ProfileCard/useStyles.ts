import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: 'lightgrey',
    borderRadius: '50%',
    height: 100,
    margin: '25px',
    width: 100,
  },
  box: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    margin: 'auto',
    marginTop: theme.spacing(8),
    maxWidth: '450px',
    padding: theme.spacing(3),
    width: '100%',
  },
  secondaryText: {
    fontSize: '12px',
    textAlign: 'center',
    width: theme.spacing(20),
  },
  title: {
    margin: theme.spacing(3),
  },
  uploadBtn: {
    color: '#ef3f40',
    fontSize: '11px',
    height: theme.spacing(6),
    margin: theme.spacing(4),
    width: theme.spacing(25),
  },
}));

export default useStyles;

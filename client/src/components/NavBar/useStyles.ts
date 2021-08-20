import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    maxHeight: '74px',
    background: '#FFFFFF',
  },
  link: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: theme.spacing(4),
    textDecoration: 'underline',
    textTransform: 'uppercase',
  },
  logo: {
    marginLeft: theme.spacing(1.25),
    marginTop: theme.spacing(1.25),
  },
  nav: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1.25),
    marginRight: theme.spacing(1.25),
  },
  toolbar: {
    justifyContent: 'space-between',
  },
}));

export default useStyles;

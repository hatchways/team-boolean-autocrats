import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: 'lightgrey',
    borderRadius: '50%',
    height: 100,
    margin: '25px',
    width: 100,
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    marginTop: '50px',
    maxHeight: 450,
    maxWidth: 450,
  },
  title: {
    margin: '50px',
  },
});

export default useStyles;

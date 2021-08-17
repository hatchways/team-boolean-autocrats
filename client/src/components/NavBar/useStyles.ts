import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appbar: {
    maxHeight: '74px',
    background: '#FFFFFF',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    alignSelf: 'center',
  },
}));

export default useStyles;

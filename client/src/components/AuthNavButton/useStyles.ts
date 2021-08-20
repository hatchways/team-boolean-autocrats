import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  accBtn: {
    height: 40,
    textTransform: 'uppercase',
    width: 100,
  },
}));

export default useStyles;

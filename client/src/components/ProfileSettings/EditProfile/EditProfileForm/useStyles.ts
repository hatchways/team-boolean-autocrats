import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  toggle: {
    marginBottom: '1%',
  },
  gridItemA: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  gridItemB: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5% 0 2% 0',
    fontWeight: 'bold',
  },
  heading: {
    margin: '0 auto',
    marginBottom: '2rem',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'right',
    fontSize: 11,
    fontWeight: 'bold',
    width: '25%',
    margin: '0 3% 0 0',
  },
  textField: {
    alignContent: 'center',
    padding: '0',
    width: '50%',
    margin: '2% 0 2% 0',
  },
  phoneButton: {
    width: 140,
    height: 30,
    marginTop: 20,
  },
  submit: {
    padding: 10,
    width: 160,
    height: 46,
    borderRadius: theme.shape.borderRadius,
    background: '#ff0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default useStyles;

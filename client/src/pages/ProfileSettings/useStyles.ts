import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FAFAFA',
    position: 'relative',
    top: 0,
    left: 0,
    height: '100%',
    marginTop: '55px',
  },
  optionItem: {
    fontSize: '1.1rem',
    margin: '12px 150px',
    color: '#9d9d9d',
    fontWeight: 600,
    hover: 'none',
    cursor: 'pointer',
    width: 'fit-content',
  },
  selectedOptionItem: {
    color: '#131313',
  },
  optionItems: {
    marginTop: '18px',
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  menuContainer: {
    position: 'relative',
    boxShadow: '0px 0px 15px #CACACA',
    borderRadius: '5px',
    height: '85vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;

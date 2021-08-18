import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Open Sans", "sans-serif", "Roboto"',
      fontSize: 15,
      color: '#9d9d9d',
      fontWeight: 600,
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
  },
  shape: {
    borderRadius: 5,
  },
});

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
      fontSize: 15,
      fontWeight: 600,
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
    secondary: { main: '#ff0000' },
  },
  shape: {
    borderRadius: 5,
  },
});

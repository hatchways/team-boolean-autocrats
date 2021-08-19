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
<<<<<<< HEAD
    secondary: { main: '#ef3f40' },
=======
    secondary: { main: '#ff0000' },
>>>>>>> af9fb21 (feat: Create edit profile UI)
  },
  shape: {
    borderRadius: 5,
  },
});

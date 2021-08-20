import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import useStyle from './useStyles';
import AuthNavButton from '../AuthNavButton/AuthNavButton';

export default function NavBar(): JSX.Element {
  const classes = useStyle();
  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src="https://i.imgur.com/OQ7Xm7w.png" title="source: imgur.com" />
        <nav className={classes.nav}>
          {/* TODO: Replace hyper-link */}
          <Link className={classes.link} href="#">
            Become a Sitter.
          </Link>
          <AuthNavButton linkTo="/login" btnText="Login" variant="outlined" />
          <AuthNavButton linkTo="/signup" btnText="Sign Up" variant="contained" />
        </nav>
      </Toolbar>
    </AppBar>
  );
}

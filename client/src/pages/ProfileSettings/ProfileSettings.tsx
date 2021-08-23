import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { useLocation } from 'react-router-dom';
import Availability from './../../components/ProfileSettings/Availability/Availability';
import EditProfile from './../../components/ProfileSettings/EditProfile/EditProfile';
import Options from './../../components/ProfileSettings/Options/Options';
import Payment from './../../components/ProfileSettings/Payment/Payment';
import ProfilePhoto from './../../components/ProfileSettings/ProfilePhoto/ProfilePhoto';
import Security from './../../components/ProfileSettings/Security/Security';
import Settings from './../../components/ProfileSettings/Settings/Settings';
import useStyles from './useStyles';

export default function ProfileSettings(): JSX.Element {
  const classes = useStyles();

  const location = useLocation();

  const handleRoute = (path: string) => {
    switch (path) {
      case '/profile/options/edit-profile':
        return <EditProfile />;

      case '/profile/options/profile-photo':
        return <ProfilePhoto />;

      case '/profile/options/availability':
        return <Availability />;

      case '/profile/options/payment':
        return <Payment />;

      case '/profile/options/security':
        return <Security />;

      case '/profile/options/settings':
        return <Settings />;

      default:
        return <EditProfile />;
    }
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={2}>
        <Options />
      </Grid>
      <Grid item xs={8} className={classes.paper}>
        <Paper elevation={3} className={classes.gridContainer}>
          {handleRoute(location.pathname)}
        </Paper>
      </Grid>
    </Grid>
  );
}

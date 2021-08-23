import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { APIProfileResponse, Profile, ProfileType } from '../../interface/Profile';
import Availability from './../../components/ProfileSettings/Availability/Availability';
import EditProfile from './../../components/ProfileSettings/EditProfile/EditProfile';
import Options from './../../components/ProfileSettings/Options/Options';
import Payment from './../../components/ProfileSettings/Payment/Payment';
import ProfilePhoto from './../../components/ProfileSettings/ProfilePhoto/ProfilePhoto';
import Security from './../../components/ProfileSettings/Security/Security';
import Settings from './../../components/ProfileSettings/Settings/Settings';
import { AuthContext, useAuth } from './../../context/useAuthContext';
import { useSnackBar } from './../../context/useSnackbarContext';
import editProfile from './../../helpers/APICalls/editProfile';
import getProfile from './../../helpers/APICalls/getProfile';
import useStyles from './useStyles';

export default function ProfileSettings(): JSX.Element {
  const classes = useStyles();

  const location = useLocation();
  const { updateSnackBarMessage } = useSnackBar();

  const userData = useAuth();
  const userId = userData.loggedInUser?.id as string;
  const { updateProfileContext } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState<Profile>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      if (userId)
        return await getProfile(userId).then((data) => {
          if (data) {
            setUserProfile(data.profile);
            updateProfileContext(data.profile);
          }
          setLoading(false);
        });
      else setLoading(false);
    };
    fetchProfile();
  }, [userId, updateProfileContext]);

  if (userId === undefined) return <CircularProgress />;
  if (loading) return <CircularProgress />;

  const handleSubmit = ({
    type,
    isAvailable,
    availableHoursPerWeek,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    email,
    phoneNumber,
    address,
    description,
    hourlyRate,
  }: Profile) => {
    const profile = {
      userId,
      type,
      isAvailable,
      availableHoursPerWeek,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      description,
      hourlyRate,
    };
    editProfile(userId as string, profile).then((data: APIProfileResponse) => {
      if (data.status === 500) {
        updateSnackBarMessage(data.message);
      } else if (data.status === 200) {
        updateSnackBarMessage(data.message);
        setUserProfile(profile);
      }
    });
  };

  const handleRoute = (path: string) => {
    switch (path) {
      case '/profile/options/edit-profile':
        return <EditProfile profile={userProfile as Profile} handleSubmit={handleSubmit as any} />;

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
        return <EditProfile profile={userProfile as Profile} handleSubmit={handleSubmit as any} />;
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={2}>
        <Options type={userProfile?.type as ProfileType} />
      </Grid>
      <Grid item xs={8} className={classes.paper}>
        <Paper elevation={3} className={classes.paperContainer}>
          {handleRoute(location.pathname)}
        </Paper>
      </Grid>
    </Grid>
  );
}

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FormikHelpers } from 'formik';
import { Profile } from './../../../interface/Profile';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import useStyles from './useStyles';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const handleSubmit = (
    {
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
      availabilityPerWeek,
    }: Profile,
    { setSubmitting }: FormikHelpers<Profile>,
  ) => {
    // TODO:
    // Make an API Call to update profile
  };
  return (
    <Grid component="main">
      <CssBaseline />
      <Grid item component={Paper} className={classes.editProfileBackground}>
        <Box className={classes.box}>
          <EditProfileForm handleSubmit={handleSubmit} />
        </Box>
      </Grid>
    </Grid>
  );
}

// TODO
// This is a temporary component that renders itself to show that routes are working
// Update this component to replicate the necessary UI for the availability of users

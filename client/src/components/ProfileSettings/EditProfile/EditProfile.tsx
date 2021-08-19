import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { StylesProvider } from '@material-ui/core/styles';
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
    }: Profile,
    { setSubmitting }: FormikHelpers<Profile>,
  ) => {
    // TODO:
    // Make an API Call to update profile
  };
  return (
    <Grid container>
      <CssBaseline />
      <Box className={classes.box}>
        <StylesProvider injectFirst>
          <EditProfileForm handleSubmit={handleSubmit} />
        </StylesProvider>
      </Box>
    </Grid>
  );
}

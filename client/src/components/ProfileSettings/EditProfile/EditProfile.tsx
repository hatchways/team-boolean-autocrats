import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
      <Box height="100%" width="100%" bgcolor="text.secondary" className={classes.box}>
        <EditProfileForm handleSubmit={handleSubmit} />
      </Box>
    </Grid>
  );
}

import DateFnsUtils from '@date-io/date-fns';
import { Switch, Typography, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Profile, ProfileType } from './../../../../interface/Profile';
import { initialValues, validationShape, availableHours, genderSelection } from './EditProfileForm.constants';
import AvailableSwitch from './AvailableSwitch/AvailableSwitch';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      type,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      description,
      isAvailable,
      availableHoursPerWeek,
      hourlyRate,
    }: Profile,
    { setStatus, setSubmitting }: FormikHelpers<Profile>,
  ) => void;
}

const EditProfileForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  const [isAvailable, setIsAvailable] = useState(true);
  const handleToggle = () => {
    isAvailable ? setIsAvailable(false) : setIsAvailable(true);
  };

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const handleBirthday = (date: any) => {
    setDateOfBirth(date);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationShape)}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            margin="5% 0 2% 0"
          >
            <Typography>
              <h1 className={classes.heading}>Edit Profile</h1>
            </Typography>
          </Box>
          {values.type === ProfileType.Sitter && ( //TODO: Fix the button styling
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              fontWeight="bold"
              marginBottom="1%"
            >
              <label className={classes.label}>{`I'M AVAILABLE`}</label>
              <AvailableSwitch id="I'M AVAILABLE" checked={isAvailable} onChange={handleToggle} name="I'M AVAILABLE" />
            </Box>
          )}
          {values.type === ProfileType.Sitter && (
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
              <label className={classes.label}>Availability</label>
              <TextField
                className={`${classes.textField}`}
                id="availableHoursPerWeek"
                select
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="availableHoursPerWeek"
                helperText={touched.availableHoursPerWeek ? errors.availableHoursPerWeek : ''}
                error={touched.availableHoursPerWeek && Boolean(errors.availableHoursPerWeek)}
                value={values.availableHoursPerWeek}
                onChange={handleChange}
                variant="outlined"
              >
                {availableHours.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          )}
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>First Name</label>
            <TextField
              className={classes.textField}
              id="firstName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="firstName"
              helperText={touched.firstName ? errors.firstName : ''}
              error={touched.firstName && Boolean(errors.firstName)}
              value={values.firstName}
              onChange={handleChange}
              variant="outlined"
              placeholder="John"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Last Name</label>
            <TextField
              className={classes.textField}
              id="lastName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="lastName"
              helperText={touched.lastName ? errors.lastName : ''}
              error={touched.lastName && Boolean(errors.lastName)}
              value={values.lastName}
              onChange={handleChange}
              variant="outlined"
              placeholder="Doe"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Gender</label>
            <TextField
              className={`${classes.textField}`}
              id="gender"
              select
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="gender"
              helperText={touched.gender ? errors.gender : ''}
              error={touched.gender && Boolean(errors.gender)}
              value={values.gender}
              onChange={handleChange}
              variant="outlined"
            >
              {genderSelection.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Birth Day</label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="dateofBirth"
                inputVariant="outlined"
                format="MMMM/dd/yyyy"
                value={dateOfBirth}
                onChange={handleBirthday}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Email Address</label>
            <TextField
              className={classes.textField}
              id="email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="email"
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              placeholder="john-doe@gmail.com"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Phone Number</label>
            <TextField
              className={classes.textField}
              id="phoneNumber"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.phoneNumber ? errors.phoneNumber : ''}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              value={values.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              placeholder="123-456-7890"
            />
          </Box>
          {values.type === ProfileType.Sitter && (
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
              <label className={classes.label}>Hourly Rate</label>
              <TextField
                className={classes.textField}
                id="hourlyRate"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={touched.hourlyRate ? errors.hourlyRate : ''}
                value={values.hourlyRate}
                error={touched.hourlyRate && Boolean(errors.hourlyRate)}
                onChange={handleChange}
                variant="outlined"
                placeholder="Set an hourly rate with a maximum of $200/hour"
              />
            </Box>
          )}
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Where You Live</label>
            <TextField
              className={classes.textField}
              id="address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.address ? errors.address : ''}
              error={touched.address && Boolean(errors.address)}
              value={values.address}
              onChange={handleChange}
              variant="outlined"
              placeholder="Address"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <label className={classes.label}>Describe Yourself</label>
            <TextField
              className={classes.textField}
              id="description"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              rows={8}
              multiline={true}
              helperText={touched.description ? errors.description : ''}
              error={touched.description && Boolean(errors.description)}
              value={values.description}
              onChange={handleChange}
              variant="outlined"
              placeholder="About you"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            margin="5% 0 2% 0"
          >
            <Button type="submit" size="small" variant="contained" color="secondary" className={classes.submit}>
              SAVE
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default EditProfileForm;

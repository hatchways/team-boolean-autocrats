import DateFnsUtils from '@date-io/date-fns';
import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { AvailableType, Profile, ProfileType } from './../../../../interface/Profile';
import AvailableSwitch from './AvailableSwitch/AvailableSwitch';
import { availableHours, genderSelection, initialValues, validationShape } from './EditProfileForm.constants';
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationShape)}
      validateOnChange={true}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, setFieldValue }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            margin="5% 0 2% 0"
          >
            <Typography className={classes.heading} variant="h4">
              Edit Profile
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
              <Typography className={classes.formItem} variant="subtitle2">{`I'm Available`}</Typography>
              <AvailableSwitch
                id="isAvailable"
                name="isAvailable"
                value={AvailableType.No}
                checked={values.isAvailable === AvailableType.No}
                onChange={(e, checked) => setFieldValue('isAvailable', checked ? AvailableType.No : AvailableType.Yes)}
              />
            </Box>
          )}
          {values.type === ProfileType.Sitter && (
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
              <Typography className={classes.formItem} variant="subtitle2">
                Availability
              </Typography>
              <TextField
                className={`${classes.textField}`}
                id="availableHoursPerWeek"
                select
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                name="availableHoursPerWeek"
                helperText={
                  touched.availableHoursPerWeek && errors.availableHoursPerWeek ? errors.availableHoursPerWeek : ''
                }
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
            <Typography className={classes.formItem} variant="subtitle2">
              First Name
            </Typography>
            <TextField
              className={classes.textField}
              id="firstName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="firstName"
              helperText={touched.firstName && errors.firstName ? errors.firstName : ''}
              error={touched.firstName && Boolean(errors.firstName)}
              value={values.firstName}
              onChange={handleChange}
              variant="outlined"
              placeholder="John"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <Typography className={classes.formItem} variant="subtitle2">
              Last Name
            </Typography>
            <TextField
              className={classes.textField}
              id="lastName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="lastName"
              helperText={touched.lastName && errors.lastName ? errors.lastName : ''}
              error={touched.lastName && Boolean(errors.lastName)}
              value={values.lastName}
              onChange={handleChange}
              variant="outlined"
              placeholder="Doe"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <Typography className={classes.formItem} variant="subtitle2">
              Gender
            </Typography>
            <TextField
              className={`${classes.textField}`}
              id="gender"
              select
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="gender"
              helperText={touched.gender && errors.gender ? errors.gender : ''}
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
            <Typography className={classes.formItem} variant="subtitle2">
              Birth Day
            </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="dateofBirth"
                name="dateOfBirth"
                inputVariant="outlined"
                format="MMMM/dd/yyyy"
                value={values.dateOfBirth}
                onChange={(date) => setFieldValue('dateOfBirth', date)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <Typography className={classes.formItem} variant="subtitle2">
              Email Address
            </Typography>
            <TextField
              className={classes.textField}
              id="email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="email"
              helperText={touched.email && errors.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              placeholder="john-doe@gmail.com"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <Typography className={classes.formItem} variant="subtitle2">
              Phone Number
            </Typography>
            <TextField
              className={classes.textField}
              id="phoneNumber"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.phoneNumber && errors.phoneNumber ? errors.phoneNumber : ''}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              value={values.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              placeholder="123-456-7890"
            />
          </Box>
          {values.type === ProfileType.Sitter && (
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
              <Typography className={classes.formItem} variant="subtitle2">
                Hourly Rate
              </Typography>
              <TextField
                className={classes.textField}
                id="hourlyRate"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={touched.hourlyRate && errors.hourlyRate ? errors.hourlyRate : ''}
                value={values.hourlyRate}
                error={touched.hourlyRate && Boolean(errors.hourlyRate)}
                onChange={handleChange}
                variant="outlined"
                placeholder="Set an hourly rate with a maximum of $200/hour"
              />
            </Box>
          )}
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <Typography className={classes.formItem} variant="subtitle2">
              Where You Live
            </Typography>
            <TextField
              className={classes.textField}
              id="address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.address && errors.address ? errors.address : ''}
              error={touched.address && Boolean(errors.address)}
              value={values.address}
              onChange={handleChange}
              variant="outlined"
              placeholder="Address"
            />
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" fontWeight="bold">
            <Typography className={classes.formItem} variant="subtitle2">
              Describe Yourself
            </Typography>
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
              helperText={touched.description && errors.description ? errors.description : ''}
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

import DateFnsUtils from '@date-io/date-fns';
import { Box, CircularProgress, InputAdornment, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Profile, ProfileType } from './../../../interface/Profile';
import AvailableSwitch from './AvailableSwitch/AvailableSwitch';
import useStyles from './useStyles';

interface ProfileProps {
  profile: Profile;
  handleSubmit: any;
}

const EditProfile = (props: ProfileProps): JSX.Element => {
  const classes = useStyles();

  const [isAvailable, setIsAvailable] = useState(props.profile.isAvailable);
  const handleToggle = () => {
    formik.setFieldValue('isAvailable', !isAvailable);
    setIsAvailable(!isAvailable);
  };

  const availableHours = [
    {
      value: 'More than 10 hrs/week',
      label: 'More than 10 hrs/week',
    },
    {
      value: 'More than 20 hrs/week',
      label: 'More than 20 hrs/week',
    },
    {
      value: 'More than 30 hrs/week',
      label: 'More than 30 hrs/week',
    },
    {
      value: 'More than 40 hrs/week',
      label: 'More than 40 hrs/week',
    },
    {
      value: 'More than 50 hrs/week',
      label: 'More than 50 hrs/week',
    },
  ];

  const genderSelection = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];

  const phoneNumberRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      type: props.profile.type as ProfileType,
      firstName: props.profile.firstName as string,
      lastName: props.profile.lastName as string,
      gender: props.profile.gender as string,
      dateOfBirth: props.profile.dateOfBirth as Date,
      email: props.profile.email as string,
      phoneNumber: props.profile.phoneNumber as string,
      address: props.profile.address as string,
      description: props.profile.description as string,
      isAvailable: props.profile.isAvailable as boolean,
      availableHoursPerWeek: props.profile.availableHoursPerWeek as string,
      hourlyRate: props.profile.hourlyRate as number,
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().max(20, 'First name must be 20 or less characters').required('Required'),
      lastName: Yup.string().max(20, 'Last name must be 20 characters or less').required('Required'),
      gender: Yup.string().required('Required'),
      dateofBirth: Yup.date().nullable(),
      email: Yup.string().required('Required').email('Invalid email address'),
      phoneNumber: Yup.string()
        .required('Required')
        .matches(phoneNumberRegExp, 'Phone number is not valid')
        .max(14, 'You must enter a ten-digit phone number with the area code')
        .min(10, 'You must enter a ten-digit phone number with the area code'),
      address: Yup.string()
        .max(40, 'Please enter your address in 40 characters or less')
        .required('Your address is required'),
      description: Yup.string()
        .max(300, 'Description must be 300 or less characters')
        .min(1, 'Please describe yourself')
        .required('Required'),
      isAvailable: props.profile.type === ProfileType.Sitter ? Yup.boolean().required('Required') : Yup.boolean(),
      availableHoursPerWeek:
        props.profile.type === ProfileType.Sitter ? Yup.string().required('Required') : Yup.string(),
      hourlyRate:
        props.profile.type === ProfileType.Sitter
          ? Yup.number()
              .test('This is a valid rate', 'This is not a valid rate', (value) =>
                value !== undefined ? /^\d+(?:\.\d{1,2})?$/.test(value.toString()) : false,
              )
              .max(200, 'The maximum you can charge is $200/hour')
              .min(1, 'The minimum you can charge is $1/hour')
              .required('Required')
          : Yup.number(),
    }),
    onSubmit: (values, { setSubmitting }) => {
      props.handleSubmit(values), setSubmitting(false);
    },
  });

  return (
    <Grid container>
      <Box className={classes.box}>
        <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
          <Box className={classes.gridItemB}>
            <Typography className={classes.heading} variant="h4">
              Edit Profile
            </Typography>
          </Box>
          {props.profile.type === ProfileType.Sitter && (
            <Box className={`${classes.gridItemA} ${classes.toggle}`}>
              <label className={classes.label}>{`I'M AVAILABLE`}</label>
              <AvailableSwitch
                id="I'M AVAILABLE"
                checked={formik.values.isAvailable}
                onChange={handleToggle}
                name="I'M AVAILABLE"
              />
            </Box>
          )}
          {props.profile.type === ProfileType.Sitter && (
            <Box className={classes.gridItemA}>
              <label className={classes.label}>Availability</label>
              <TextField
                className={`${classes.textField}`}
                id="availableHoursPerWeek"
                select
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                error={formik.touched.availableHoursPerWeek && formik.errors.availableHoursPerWeek !== undefined}
                helperText={
                  formik.touched.availableHoursPerWeek && formik.errors.availableHoursPerWeek
                    ? formik.errors.availableHoursPerWeek
                    : ''
                }
                {...formik.getFieldProps('availableHoursPerWeek')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {formik.touched.availableHoursPerWeek && !formik.errors.availableHoursPerWeek && (
                        <CheckCircleIcon />
                      )}
                      {formik.touched.availableHoursPerWeek && formik.errors.availableHoursPerWeek && <ErrorIcon />}
                    </InputAdornment>
                  ),
                }}
                onChange={formik.handleChange}
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
          <Box className={classes.gridItemA}>
            <label className={classes.label}>First Name</label>
            <TextField
              className={classes.textField}
              id="firstName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              error={formik.touched.firstName && formik.errors.firstName !== undefined}
              helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
              {...formik.getFieldProps('firstName')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.firstName && !formik.errors.firstName && <CheckCircleIcon />}
                    {formik.touched.firstName && formik.errors.firstName && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              inputProps={{ maxLength: 20 }}
              variant="outlined"
              placeholder="John"
            />
          </Box>
          <Box className={classes.gridItemA}>
            <label className={classes.label}>Last Name</label>
            <TextField
              className={classes.textField}
              id="lastName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps('lastName')}
              error={formik.touched.lastName && formik.errors.lastName !== undefined}
              helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.lastName && !formik.errors.lastName && <CheckCircleIcon />}
                    {formik.touched.lastName && formik.errors.lastName && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              inputProps={{ maxLength: 20 }}
              variant="outlined"
              placeholder="Doe"
            />
          </Box>
          <Box className={classes.gridItemA}>
            <label className={classes.label}>Gender</label>
            <TextField
              className={`${classes.textField}`}
              id="gender"
              select
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps('gender')}
              error={formik.touched.gender && formik.errors.gender !== undefined}
              helperText={formik.touched.gender && formik.errors.gender ? formik.errors.gender : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.gender && !formik.errors.gender && <CheckCircleIcon />}
                    {formik.touched.gender && formik.errors.gender && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              inputProps={{ maxLength: 20 }}
              onChange={formik.handleChange}
              variant="outlined"
            >
              {genderSelection.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box className={classes.gridItemA}>
            <label className={classes.label}>Birth Day</label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                id="dateofBirth"
                inputVariant="outlined"
                format="MMMM/dd/yyyy"
                clearable
                value={formik.values.dateOfBirth}
                onChange={(date) => formik.setFieldValue('dateOfBirth', date)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Box>
          <Box className={classes.gridItemA}>
            <label className={classes.label}>Email Address</label>
            <TextField
              className={classes.textField}
              id="email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps('email')}
              error={formik.touched.email && formik.errors.email !== undefined}
              helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.email && !formik.errors.email && <CheckCircleIcon />}
                    {formik.touched.email && formik.errors.email && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              variant="outlined"
              placeholder="john-doe@gmail.com"
            />
          </Box>
          <Box className={classes.gridItemA}>
            <label className={classes.label}>Phone Number</label>
            <TextField
              className={classes.textField}
              id="phoneNumber"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps('phoneNumber')}
              error={formik.touched.phoneNumber && formik.errors.phoneNumber !== undefined}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.phoneNumber && !formik.errors.phoneNumber && <CheckCircleIcon />}
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              variant="outlined"
              placeholder="123-456-7890"
            />
          </Box>
          {props.profile.type === ProfileType.Sitter && (
            <Box className={classes.gridItemA}>
              <label className={classes.label}>Hourly Rate</label>
              <TextField
                className={classes.textField}
                id="hourlyRate"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                {...formik.getFieldProps('hourlyRate')}
                error={formik.touched.hourlyRate && formik.errors.hourlyRate !== undefined}
                helperText={formik.touched.hourlyRate && formik.errors.hourlyRate ? formik.errors.hourlyRate : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {formik.touched.hourlyRate && !formik.errors.hourlyRate && <CheckCircleIcon />}
                      {formik.touched.hourlyRate && formik.errors.hourlyRate && <ErrorIcon />}
                    </InputAdornment>
                  ),
                }}
                onChange={formik.handleChange}
                variant="outlined"
                placeholder="Set an hourly rate with a maximum of $200/hr"
              />
            </Box>
          )}
          <Box className={classes.gridItemA}>
            <label className={classes.label}>Where You Live</label>
            <TextField
              className={classes.textField}
              id="address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps('address')}
              error={formik.touched.address && formik.errors.address !== undefined}
              helperText={formik.touched.address && formik.errors.address ? formik.errors.address : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.address && !formik.errors.address && <CheckCircleIcon />}
                    {formik.touched.address && formik.errors.address && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              variant="outlined"
              placeholder="Address"
            />
          </Box>
          <Box className={classes.gridItemA}>
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
              {...formik.getFieldProps('description')}
              error={formik.touched.description && formik.errors.description !== undefined}
              helperText={formik.touched.description && formik.errors.description ? formik.errors.description : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formik.touched.description && !formik.errors.description && <CheckCircleIcon />}
                    {formik.touched.description && formik.errors.description && <ErrorIcon />}
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              variant="outlined"
              placeholder="About you"
            />
          </Box>
          <Box className={classes.gridItemB}>
            <Button type="submit" size="small" variant="contained" color="secondary" className={classes.submit}>
              {formik.isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SAVE'}
            </Button>
          </Box>
        </form>
      </Box>
    </Grid>
  );
};

export default EditProfile;

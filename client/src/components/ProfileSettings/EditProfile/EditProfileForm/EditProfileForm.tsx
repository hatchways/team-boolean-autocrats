import DateFnsUtils from '@date-io/date-fns';
import { FormControlLabel, Grid, Switch, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Field, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Profile } from './../../../../interface/Profile';
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
      availabilityPerWeek,
    }: Profile,
    { setStatus, setSubmitting }: FormikHelpers<Profile>,
  ) => void;
}

const EditProfileForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

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

  const [isAvailable, setIsAvailable] = useState(false);
  const handleToggle = () => {
    isAvailable ? setIsAvailable(false) : setIsAvailable(true);
  };

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

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const handleBirthday = (date: any) => {
    setDateOfBirth(date);
  };

  const phoneNumberRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <Formik
      initialValues={{
        type: '',
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: new Date(),
        email: '',
        phoneNumber: '',
        address: '',
        description: '',
        isAvailable: false,
        availableHoursPerWeek: '',
        hourlyRate: 1,
        availabilityPerWeek: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
      }}
      validationSchema={Yup.object().shape({
        type: Yup.string().required('Required'),
        firstName: Yup.string().max(15, 'firstName must be 15 or less characters').required('Required'),
        lastName: Yup.string().max(20, 'lastName must be 20 characters or less').required('Required'),
        gender: Yup.string().required('Required'),
        dateofBirth: Yup.date().required('Required'),
        email: Yup.string().required('Requried').email('Invalid email address'),
        phoneNumber: Yup.string()
          .required('Required')
          .matches(phoneNumberRegExp, 'Phone number is not valid')
          .max(14, 'You must enter a ten-digit phone number with the area code')
          .min(10, 'You must enter a ten-digit phone number with the area code'),
        address: Yup.string().required('Required'),
        description: Yup.string().max(200, 'description must be 200 for less characters'),
        isAvailable: Yup.string().required('Required'),
        availableHoursPerWeek: Yup.string().required('Required'),
        hourlyRate: Yup.number()
          .test('This is a valid rate', 'This is not a valid rate', (value) =>
            value !== undefined ? /^\d+(?:\.\d{1,2})?$/.test(value.toString()) : false,
          )
          .max(200, 'The maximum you can charge is $200/hour')
          .min(1, 'The minimum you can charge is $1/hour')
          .required('Required'),
        availabilityPerWeek: Yup.object({
          monday: Yup.boolean(),
          tuesday: Yup.boolean(),
          wednesday: Yup.boolean(),
          thursday: Yup.boolean(),
          friday: Yup.boolean(),
          saturday: Yup.boolean(),
          sunday: Yup.boolean(),
        }),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid className={classes.gridItem}>
            <Typography>
              <h1 className={classes.heading}>Edit Profile</h1>
            </Typography>
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>{`TYPE`}</label>
            <label className={classes.selectLabel}>
              <Field name="dogSitter" type="radio" value="Sitter" color="secondary" />
              Sitter
            </label>
            <label className={classes.selectLabel}>
              <Field name="dogSitter" type="radio" value="Owner" color="secondary" />
              Owner
            </label>
            <label className={classes.selectLabel}>
              <Field name="dogSitter" type="radio" value="Sitter/Owner" />
              Sitter/Owner
            </label>
          </Grid>
          <Grid className={classes.gridItem}>
            <FormControlLabel
              control={<Switch color="secondary" onChange={handleToggle} checked={isAvailable} />}
              label="I'M AVAILABLE"
              labelPlacement="start"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>AVAILABILITY</label>
            <TextField
              className={`${classes.textField}`}
              id="availableHoursPerWeek"
              select
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="availableHoursPerWeek"
              autoFocus
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
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>FIRST NAME</label>
            <TextField
              className={classes.textField}
              id="firstName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="firstName"
              autoComplete="firstName"
              autoFocus
              helperText={touched.firstName ? errors.firstName : ''}
              error={touched.firstName && Boolean(errors.firstName)}
              value={values.firstName}
              onChange={handleChange}
              variant="outlined"
              placeholder="John"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>LAST NAME</label>
            <TextField
              className={classes.textField}
              id="lastName"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="lastName"
              autoComplete="lastName"
              autoFocus
              helperText={touched.lastName ? errors.lastName : ''}
              error={touched.lastName && Boolean(errors.lastName)}
              value={values.lastName}
              onChange={handleChange}
              variant="outlined"
              placeholder="Doe"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>GENDER</label>
            <TextField
              className={`${classes.textField}`}
              id="gender"
              select
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="gender"
              autoFocus
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
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>BIRTH DAY</label>
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
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>EMAIL ADDRESS</label>
            <TextField
              className={classes.textField}
              id="email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              name="email"
              autoComplete="email"
              autoFocus
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              placeholder="john-doe@gmail.com"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>PHONE NUMBER</label>
            <TextField
              className={classes.textField}
              id="phoneNumber"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="home/mobile number"
              helperText={touched.phoneNumber ? errors.phoneNumber : ''}
              value={values.phoneNumber}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>HOURLY RATE</label>
            <TextField
              className={classes.textField}
              id="hourlyRate"
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Set an hourly rate with a maximum of $200/hour"
              helperText={touched.hourlyRate ? errors.hourlyRate : ''}
              value={values.hourlyRate}
              error={touched.hourlyRate && Boolean(errors.hourlyRate)}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>WHERE YOU LIVE</label>
            <TextField
              className={classes.textField}
              id="address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Address"
              helperText={touched.address ? errors.address : ''}
              error={touched.address && Boolean(errors.address)}
              value={values.address}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.gridItem}>
            <label className={classes.label}>DESCRIBE YOURSELF</label>
            <TextField
              className={classes.textField}
              id="description"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              rows={8}
              placeholder="About you"
              multiline={true}
              helperText={touched.description ? errors.description : ''}
              error={touched.description && Boolean(errors.description)}
              value={values.description}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.gridItem} alignItems="center">
            <Button type="submit" size="small" variant="contained" color="secondary" className={classes.submit}>
              SAVE
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default EditProfileForm;

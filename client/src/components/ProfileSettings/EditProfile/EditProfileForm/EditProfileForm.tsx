import DateFnsUtils from '@date-io/date-fns';
import { Grid, Switch, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Profile, ProfileType } from './../../../../interface/Profile';
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

  const [isAvailable, setIsAvailable] = useState(false);
  const handleToggle = () => {
    isAvailable ? setIsAvailable(false) : setIsAvailable(true);
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

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const handleBirthday = (date: any) => {
    setDateOfBirth(date);
  };

  const phoneNumberRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  return (
    <Formik
      initialValues={{
        type: ProfileType.Sitter,
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: new Date(),
        email: '',
        phoneNumber: '',
        address: '',
        description: '',
        isAvailable: true,
        availableHoursPerWeek: '',
        hourlyRate: 1,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(15, 'First name must be 15 or less characters').required('Required'),
        lastName: Yup.string().max(20, 'Last name must be 20 characters or less').required('Required'),
        gender: Yup.string().required('Required'),
        dateofBirth: Yup.date().required('Required'),
        email: Yup.string().required('Requried').email('Invalid email address'),
        phoneNumber: Yup.string()
          .required('Required')
          .matches(phoneNumberRegExp, 'Phone number is not valid')
          .max(14, 'You must enter a ten-digit phone number with the area code')
          .min(10, 'You must enter a ten-digit phone number with the area code'),
        address: Yup.string().required('Required'),
        description: Yup.string()
          .max(200, 'Description must be 200 for less characters')
          .min(1, 'Please describe yourself')
          .required('Required'),
        isAvailable: Yup.boolean().required('Required'),
        availableHoursPerWeek: Yup.string().required('Required'),
        hourlyRate: Yup.number()
          .test('This is a valid rate', 'This is not a valid rate', (value) =>
            value !== undefined ? /^\d+(?:\.\d{1,2})?$/.test(value.toString()) : false,
          )
          .max(200, 'The maximum you can charge is $200/hour')
          .min(1, 'The minimum you can charge is $1/hour')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid className={classes.gridItemB}>
            <Typography>
              <h1 className={classes.heading}>Edit Profile</h1>
            </Typography>
          </Grid>
          {values.type === ProfileType.Sitter && ( //TODO: Fix the button styling
            <Grid className={classes.gridItemA}>
              <label className={classes.label}>{`I'M AVAILABLE`}</label>
              <Switch id="I'M AVAILABLE" checked={isAvailable} onChange={handleToggle} name="I'M AVAILABLE" />
            </Grid>
          )}
          {values.type === ProfileType.Sitter && (
            <Grid className={classes.gridItemA}>
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
          )}
          <Grid className={classes.gridItemA}>
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
              helperText={touched.firstName ? errors.firstName : ''}
              error={touched.firstName && Boolean(errors.firstName)}
              value={values.firstName}
              onChange={handleChange}
              variant="outlined"
              placeholder="John"
            />
          </Grid>
          <Grid className={classes.gridItemA}>
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
              helperText={touched.lastName ? errors.lastName : ''}
              error={touched.lastName && Boolean(errors.lastName)}
              value={values.lastName}
              onChange={handleChange}
              variant="outlined"
              placeholder="Doe"
            />
          </Grid>
          <Grid className={classes.gridItemA}>
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
          <Grid className={classes.gridItemA}>
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
          <Grid className={classes.gridItemA}>
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
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              placeholder="john-doe@gmail.com"
            />
          </Grid>
          <Grid className={classes.gridItemA}>
            <label className={classes.label}>PHONE NUMBER</label>
            <TextField
              className={classes.textField}
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
          {values.type === ProfileType.Sitter && (
            <Grid className={classes.gridItemA}>
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
          )}
          <Grid className={classes.gridItemA}>
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
          <Grid className={classes.gridItemA}>
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
          <Grid className={classes.gridItemB} alignItems="center">
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: '#ff0000',
                color: 'white',
                padding: 10,
                width: 160,
                height: 46,
                fontSize: '11px',
              }}
              type="submit"
              size="small"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              SAVE
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default EditProfileForm;

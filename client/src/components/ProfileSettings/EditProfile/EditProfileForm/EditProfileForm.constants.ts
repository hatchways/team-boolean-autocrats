import * as Yup from 'yup';
import { AvailableType, ProfileType } from '../../../../interface/Profile';

export const availableHours = [
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
export const genderSelection = [
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

export const initialValues = {
  type: ProfileType.Sitter,
  firstName: '',
  lastName: '',
  gender: '',
  dateOfBirth: new Date(),
  email: '',
  phoneNumber: '',
  address: '',
  description: '',
  isAvailable: AvailableType.No,
  availableHoursPerWeek: '',
  hourlyRate: 1,
};
export const validationShape = {
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
  isAvailable: Yup.string().required('Required'),
  availableHoursPerWeek: Yup.string().required('Required'),
  hourlyRate: Yup.number()
    .test('This is a valid rate', 'This is not a valid rate', (value) =>
      value !== undefined ? /^\d+(?:\.\d{1,2})?$/.test(value.toString()) : false,
    )
    .max(200, 'The maximum you can charge is $200/hour')
    .min(1, 'The minimum you can charge is $1/hour')
    .required('Required'),
};

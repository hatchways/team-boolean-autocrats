import { string } from 'yup/lib/locale';
import { Profile } from '../interface/Profile';

const mockUserProfile: Profile = {
  userId: 'mockUserId',
  type: 'mocktype',
  firstName: 'mockFirstName',
  lastName: 'mockLastName',
  gender: 'mockGender',
  dateOfBirth: new Date(),
  email: 'mockEmail',
  phoneNumber: 'mockPhoneNumber',
  address: 'mockAddress',
  description: 'mockDescription',
  isAvailable: false,
  availableHoursPerWeek: 'mockAvailableHoursPerWeek',
  hourlyRate: 25,
  availabilityPerWeek: {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: true,
    saturday: true,
    sunday: true,
  },
};

const mockOtherUserProfile1: Profile = {
  userId: 'mockUserId1',
  type: 'mocktype1',
  firstName: 'mockFirstName1',
  lastName: 'mockLastName1',
  gender: 'mockGender1',
  dateOfBirth: new Date(),
  email: 'mockEmail1',
  phoneNumber: 'mockPhoneNumber1',
  address: 'mockAddress1',
  description: 'mockDescription1',
  isAvailable: false,
  availableHoursPerWeek: 'mockAvailableHoursPerWeek1',
  hourlyRate: 26,
  availabilityPerWeek: {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: true,
    saturday: true,
    sunday: true,
  },
};
const mockOtherUserProfile2: Profile = {
  userId: 'mockUserId2',
  type: 'mocktype2',
  firstName: 'mockFirstName2',
  lastName: 'mockLastName2',
  gender: 'mockGender2',
  dateOfBirth: new Date(),
  email: 'mockEmail',
  phoneNumber: 'mockPhoneNumber2',
  address: 'mockAddress2',
  description: 'mockDescription2',
  isAvailable: false,
  availableHoursPerWeek: 'mockAvailableHoursPerWeek2',
  hourlyRate: 27,
  availabilityPerWeek: {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: true,
    saturday: true,
    sunday: true,
  },
};
const mockOtherUserProfile3: Profile = {
  userId: 'mockUserId3',
  type: 'mocktype3',
  firstName: 'mockFirstName3',
  lastName: 'mockLastName3',
  gender: 'mockGender3',
  dateOfBirth: new Date(),
  email: 'mockEmail',
  phoneNumber: 'mockPhoneNumber3',
  address: 'mockAddress3',
  description: 'mockDescription3',
  isAvailable: false,
  availableHoursPerWeek: 'mockAvailableHoursPerWeek3',
  hourlyRate: 28,
  availabilityPerWeek: {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: true,
    saturday: true,
    sunday: true,
  },
};

const mockOtherUserProfiles: Profile[] = [mockOtherUserProfile1, mockOtherUserProfile2, mockOtherUserProfile3];

export { mockUserProfile, mockOtherUserProfiles };

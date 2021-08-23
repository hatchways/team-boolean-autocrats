import { User } from './User';

export enum ProfileType {
  Sitter = 'Sitter',
  Owner = 'Owner',
}

export interface Profile {
  _id?: string;
  userId?: string;
  type?: ProfileType;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber?: string;
  address: string;
  description: string;
  isAvailable?: boolean;
  availableHoursPerWeek?: string;
  hourlyRate?: number;
  availabilityPerWeek?: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
}

export interface SearchProfileApiData {
  users?: User[];
  profile?: Profile[];
  profiles?: Profile[];
  error?: { message: string };
}

export interface APIProfileResponse {
  message: string;
  profile: Profile;
  status: number;
}

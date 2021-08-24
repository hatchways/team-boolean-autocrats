export enum ProfileType {
  Sitter = 'Sitter',
  Owner = 'Owner',
}

export enum AvailableType {
  Yes = 'Yes',
  No = 'No',
}
export interface Profile {
  userId?: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber?: string;
  address: string;
  description: string;
  type?: ProfileType;
  isAvailable?: string;
  availableHoursPerWeek?: string;
  availabilityPerWeek?: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  hourlyRate?: number;
}

export interface CurrentUserProfile {
  profile: {
    type?: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber?: string;
    address: string;
    description: string;
    isAvailable: boolean;
    availableHoursPerWeek: string;
    hourlyRate: number;
    availabilityPerWeek: {
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
      sunday: boolean;
    };
  };
}

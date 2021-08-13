export interface Profile {
  userId: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
  type: string;
  isAvailable?: boolean;
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

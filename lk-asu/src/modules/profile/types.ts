export interface Profile {
  id: string | number;
  familyName?: string;
  name: string;
  fatherName?: string;
  birthDate?: string | Date;
  department?: string;
  about: string;
}
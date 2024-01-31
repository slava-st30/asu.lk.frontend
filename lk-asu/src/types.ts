export interface Option {
  id: string | number;
  value: string;
}

export interface User {
  id: string | number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}
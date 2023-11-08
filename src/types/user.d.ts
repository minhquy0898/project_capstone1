import { Role } from './route';

export type Role = 'user' | 'admin';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  role: Role;
}

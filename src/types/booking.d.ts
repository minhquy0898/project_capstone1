import { NumberFieldAria } from 'react-aria';
import IServiceItem from './service';
import { IUser } from './user';

interface IBooking {
  renters: IServiceItem[];
  id?: string;
  event: string;
  address: string;
  phone: string;
  numberOfAttendes: number;
  eventTime: string;
  name: string;
  email: string;
  servicePack: string;
  totalAmount: Number;
  method: string;
  paypalId: string;
  user: IUser;
}

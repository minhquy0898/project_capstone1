import { NumberFieldAria } from 'react-aria';

interface IBooking {
  renters: [
    {
      renter: string;
      quantity: number;
    },
  ];
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
}

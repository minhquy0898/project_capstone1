export interface IRenter {
  renter: string;
  quantity: number;
  price: number;
}

export interface ICheckoutBody {
  renters: IRenter[];
  method: string;
  paypalId: string;
  address: string;
  phone: string;
  email: string;
  numberOfAttendes: number;
  eventTime: string;
}

export interface IBooking extends ICheckoutBody {
  renters: IRenter[];
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

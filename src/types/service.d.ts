export interface IService {
  title: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
export interface IServiceItem {
  id: string;
  quantity: number;
  price: number;
  renter: {
    id: string;
    name: string;
    unit: string;
    price: number;
    quantity: number;
    note: string;
  };
}

export interface IServicePackInfomation {
  name: string;
  renters: IServiceItem[];
}

export interface IServiceInfomation {
  id: string;
  title: string;
  settings: IServicePackInfomation[];
}

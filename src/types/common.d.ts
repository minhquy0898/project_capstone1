export interface IGenericResponse<T = any> {
  map(arg0: (item: any) => string): unknown;
  status: number;
  isSuccess: boolean;
  msg: string;
  data: T;
}

export interface ICardItem {
  title: string;
  imageUrl: string;
}

export interface ISidebarOption {
  name: string;
  path: string;
  role?: Role;
}

export interface IServiceItem {
  id: string;
  name: string;
  unit: string;
  price: string;
  quantity: string;
  note: string;
}

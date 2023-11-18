export interface IService {
  title: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRenter {
  id: string;
  renter: IServiceItem;
}

export interface IServiceInfomation {
  id: string;
  name: string;
  renters: IRenter[];
}

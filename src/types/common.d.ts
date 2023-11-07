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

import { useMutation, useQuery } from '@tanstack/react-query';
import http from '../config/axios.config';
import { IGenericResponse } from '../types/common';
import { IUser } from '../types/user';

/**
 * login
 */
interface ILoginBody {
  email: string;
  password: string;
}

const loginApi = async (body: ILoginBody) => {
  const res = await http.post<IGenericResponse<IUser>>('auth/sign-in', body);
  return res.data;
};

export const useLogin = () =>
  useMutation({
    mutationFn: loginApi,
  });

/**
 * register
 */
interface IRegisterBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const registerApi = async (body: IRegisterBody) => {
  const res = await http.post<IGenericResponse>('auth/sign-up', body);

  return res.data;
};

export const useRegister = () =>
  useMutation({
    mutationFn: registerApi,
  });

/**
 * fetch user
 */
const fetchUserApi = async () => {
  const res = await http.get<IGenericResponse<IUser>>('fetchUser');
  return res.data;
};

export const useFetchUser = () =>
  useQuery({
    queryKey: ['fetch-user'],
    queryFn: fetchUserApi,
  });

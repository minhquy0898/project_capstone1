import { useMutation } from '@tanstack/react-query';
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
  firstname: string;
  lastname: string;
}

const registerApi = async (body: IRegisterBody) => {
  const res = await http.post<IGenericResponse>('login', body);
  return res.data;
};

export const useRegister = () =>
  useMutation({
    mutationFn: registerApi,
  });

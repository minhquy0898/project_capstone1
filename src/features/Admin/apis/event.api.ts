import { useMutation } from '@tanstack/react-query';
import http from '../../../config/axios.config';
import { IGenericResponse } from '../../../types/common';
import { IEvent } from '../../../types/event';

const addEvent = async (payload: IEvent) => {
  const res = await http.post<IGenericResponse>('event', payload);
  return res.data;
};

export const useAddEvent = () => {
  return useMutation({
    mutationFn: addEvent,
  });
};

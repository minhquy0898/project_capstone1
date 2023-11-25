/**
 * get setting option in service
 */

import { useQuery } from '@tanstack/react-query';
import http from '../../../config/axios.config';
import { IGenericResponse } from '../../../types/common';
import { IBooking } from '../../../types/booking';

const getServiceStatistic = async (userId: string, userRole: string) => {
  const res =
    userRole === 'user'
      ? await http.get<IGenericResponse<{ orders: IBooking[] }>>(
          `/order/${userId}`,
        )
      : await http.get<IGenericResponse<{ orders: IBooking[] }>>(`/order`);
  return res.data;
};

export const useGetServiceStatistic = (userId: string, userRole: string) => {
  return useQuery({
    queryKey: ['get-service-statistic', userId, userRole],
    queryFn: () => getServiceStatistic(userId, userRole),
    enabled: !!userId,
  });
};

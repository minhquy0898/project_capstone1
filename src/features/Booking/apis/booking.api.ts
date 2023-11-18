import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import http from '../../../config/axios.config';
import { IGenericResponse } from '../../../types/common';
import { IEvent } from '../../../types/event';
import { IService, IServiceInfomation } from '../../../types/service';

/**
 * get service
 * @returns
 */
const getListService = async () => {
  const res = await http.get<IGenericResponse<{ events: IEvent[] }>>('service');
  return res.data;
};

export const useAllEvent = () => {
  return useQuery({
    queryKey: ['get-list-service'],
    queryFn: getListService,
  });
};

// const dataService = [
//     {
//       renter: services?.data.renters[0].id,
//       quantity: 5,
//     },
//     {
//       renter: services?.data.renters[1].id,
//       quantity: 6,
//     },
//     {
//       renter: services?.data.renters[1].id,
//       quantity: 7,
//     },
//   ];

/**
 * get setting option in service
 */

const getSettingOptionService = async (idService: string) => {
  const res = await http.get<
    IGenericResponse<{ setting: IServiceInfomation[] }>
  >(`service/${idService}/setting`);
  return res.data;
};

export const useGetSettingOptionService = (idService: string) => {
  return useQuery({
    queryKey: ['get-setting-option-service', idService],
    queryFn: () => getSettingOptionService(idService),
    enabled: !!idService,
  });
};

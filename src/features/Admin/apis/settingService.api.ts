import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import http from '../../../config/axios.config';
import { IGenericResponse, IServiceItem } from '../../../types/common';

/**
 * Thêm
 * @param payload
 * @returns
 */
const addService = async (payload: Omit<IServiceItem, 'id'>) => {
  const res = await http.post<IGenericResponse<IServiceItem>>(
    'renter',
    payload,
  );
  return res.data;
};

export const useAddService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addService,
    onSuccess(data) {
      if (data.isSuccess) {
        queryClient.invalidateQueries(['get-all-services']);
      }
    },
  });
};

/**
 * Edit
 */
const editService = async ({ id, ...restService }: IServiceItem) => {
  const res = await http.patch<IGenericResponse<{ renter: IServiceItem }>>(
    `renter/${id}`,
    restService,
  );
  return res.data;
};

export const useEditService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editService,
    onSuccess(data) {
      if (data.isSuccess) {
        queryClient.invalidateQueries(['get-all-services']);
      }
    },
  });
};

/**
 * Lấy ra tất cả services
 */
const getAllServicesApi = async () => {
  const res =
    await http.get<IGenericResponse<{ renters: IServiceItem[] }>>('renter');
  return res.data;
};

export const useAllService = () => {
  return useQuery({
    queryKey: ['get-all-services'],
    queryFn: getAllServicesApi,
  });
};

/**
 * Lấy dịch vụ bằng ID
 */
const getServiceById = async (id?: string) => {
  const res = await http.get<IGenericResponse<{ renter: IServiceItem }>>(
    `renter/${id}`,
  );
  return res.data;
};

export const useGetServiceById = (id?: string) => {
  return useQuery({
    queryKey: ['get-service', String(id)],
    queryFn: () => getServiceById(id),
    enabled: !!id,
  });
};

/**
 *  Delete
 */
const deleteService = async (id: string) => {
  const res = await http.delete<IGenericResponse>(`renter/${id}`);
  return res.data;
};

export const useDeleteServiceById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteService,
    onSuccess(data) {
      if (data.isSuccess) {
        queryClient.invalidateQueries(['get-all-services']);
      }
    },
  });
};

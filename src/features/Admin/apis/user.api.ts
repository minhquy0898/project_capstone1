import { useMutation, useQueryClient } from '@tanstack/react-query';
import http from '../../../config/axios.config';
import { MutationConfig } from '../../../config/react-query.config';

/**
 * change profile
 */
interface IProfileBody {
  email: string;
  firstName: string;
  lastName: string;
}

export const changeProfile = async ({
  userId,
  payload,
}: {
  userId: string;
  payload: IProfileBody;
}) => {
  const res = await http.patch(`/user/${userId}`, payload);

  return res.data;
};

export const useChangeProfile = (
  config?: MutationConfig<typeof changeProfile>,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess(data) {
      if (data.isSuccess) {
        queryClient.invalidateQueries(['fetch-user']);
      }
    },
    mutationFn: changeProfile,
    ...config,
  });
};

/**
 * change profile
 */
interface IChangePasBody {
  oldPassword: string;
  newPassword: string;
}

export const changePass = async ({
  userId,
  payload,
}: {
  userId: string;
  payload: IChangePasBody;
}) => {
  const res = await http.patch(`/auth/change-password/${userId}`, payload);

  return res.data;
};

export const useChangePass = (config?: MutationConfig<typeof changePass>) => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess(data) {
      if (data.isSuccess) {
        queryClient.invalidateQueries(['fetch-user']);
      }
    },
    mutationFn: changePass,
    ...config,
  });
};

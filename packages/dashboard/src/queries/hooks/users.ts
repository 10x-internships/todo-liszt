import { useQuery, UseQueryOptions } from 'react-query';

import * as apis from '../apis/users';

export const useGetUsers = (options?: UseQueryOptions) =>
  useQuery('userProfile', apis.fetchUserProfile, { ...options });

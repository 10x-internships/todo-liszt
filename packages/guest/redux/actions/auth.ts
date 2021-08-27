import { NextRouter } from 'next/router';

import todoLisztAPI from '../api';
import { SIGN_UP } from '../constants/auth';

import fetchData from './fetchData';

type DataTypes = { email: string; password: string };

export const signUp = (data: DataTypes, router: NextRouter) => {
  return fetchData({
    method: 'POST',
    url: '/users',
    axiosInstance: todoLisztAPI,
    type: SIGN_UP,
    data,
    router,
    redirectPath: '/signin',
  });
};

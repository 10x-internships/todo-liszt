import { NextRouter } from 'next/router';
import { Dispatch } from 'redux';
import { AxiosRequestConfig, AxiosInstance } from 'axios';

import requestStatus from '../constants/requestStatus';

import getRequestType from '../helpers/getRequestType';

interface IFetchData extends AxiosRequestConfig {
  axiosInstance: AxiosInstance;
  url: string;
  type: string;
  router?: NextRouter;
  redirectPath?: string;
}

const fetchData = ({
  method = 'GET',
  url,
  headers,
  data,
  axiosInstance,
  type,
  router,
  redirectPath,
}: IFetchData) => {
  return async (dispatch: Dispatch) => {
    const getRequestStatus = getRequestType(type);
    dispatch({ type: getRequestStatus(requestStatus.REQUEST) });
    try {
      const response = await axiosInstance({
        method,
        url,
        headers,
        data,
      });

      if (response.status === 201) {
        dispatch({ type: getRequestStatus(requestStatus.SUCCESS), payload: response.data });
        redirectPath && router && router?.push('/signin');
      }
    } catch (error) {
      dispatch({
        type: getRequestStatus(requestStatus.FAILURE),
        payload: error.response.data,
      });
    }
  };
};

export default fetchData;

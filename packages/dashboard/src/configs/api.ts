import axios from 'axios';

import * as auth from '@utils/auth';

import pathConfig from './path';

const todoLisztAPI = axios.create({
  baseURL: pathConfig.apis.baseURL.url,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

todoLisztAPI.interceptors.request.use(
  (config) => {
    const accessToken = auth.getAccessToken();

    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

todoLisztAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = auth.getRefreshToken();
    if (error.response.status === 401) {
      const { url, method } = pathConfig.apis.refreshToken;

      todoLisztAPI({ url, method, data: refreshToken })
        .then((res) => {
          const { accessToken, refreshToken } = res.data;
          auth.setAccessToken(accessToken);
          auth.setRefreshToken(refreshToken);
          todoLisztAPI.defaults.headers.common['Authorization'] = accessToken;
          return todoLisztAPI(originalRequest);
        })
        .catch((error) => Promise.reject(error));
    }
    return Promise.reject(error);
  }
);

export default todoLisztAPI;

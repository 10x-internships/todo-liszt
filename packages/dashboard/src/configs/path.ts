import { Method } from 'axios';

interface IUrl {
  url: string;
  method?: Method;
}

interface IApis {
  [propsName: string]: IUrl;
}

const app = {
  index: '/',
  home: '/app',
  list: '/app/list',
  listCreate: '/app/list/create',
  listUpdate: '/app/list/:id',
  calendar: '/app/calendar',
  settings: '/app/settings',
};

const apis: IApis = {
  baseURL: {
    url: process.env.REACT_APP_API_URL as string,
  },
  refreshToken: {
    url: '/sessions/refresh',
    method: 'POST',
  },
  signOut: {
    url: '/sessions',
    method: 'DELETE',
  },
  getUserProfile: {
    url: '/users/me',
    method: 'GET',
  },
  getUserSettings: {
    url: '/settings',
    method: 'GET',
  },
  updateUserProfile: {
    url: '/users',
    method: 'PUT',
  },
  updateUserAvatar: {
    url: '/users/avatar',
    method: 'PUT',
  },
  updateUserSettings: {
    url: '/settings',
    method: 'PUT',
  },
  deleteUser: {
    url: '/users',
    method: 'DELETE',
  },
};

const pathConfig = {
  app,
  apis,
};

export default pathConfig;

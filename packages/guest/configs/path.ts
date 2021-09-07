import { Method } from 'axios';
interface IUrl {
  url: string;
  method?: Method;
}

interface IApis {
  [propsName: string]: IUrl;
}

const app = {
  root: '/',
  index: '/',
  signIn: '/signin',
  signUp: '/signUp',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
};

const apis: IApis = {
  baseUrl: {
    url: process.env.NEXT_PUBLIC_API_URL as string,
  },
  signIn: {
    url: '/sessions',
    method: 'POST',
  },
  signUp: {
    url: '/users',
    method: 'POST',
  },
};

const pathConfig = {
  app,
  apis,
};

export default pathConfig;

import todoLisztAPI from '@configs/api';
import pathConfig from '@configs/path';

interface IUserData {
  email: string;
  password: string;
}

export const checkSignin = async (newUser: IUserData) => {
  const { url, method } = pathConfig.apis.signIn;
  const response = await todoLisztAPI({ url, method, data: { ...newUser, type: 'email' } });
  return response.data.data;
};

export const checkSignUp = async (newUser: IUserData) => {
  const { url, method } = pathConfig.apis.signUp;
  const response = await todoLisztAPI({ url, method, data: newUser });
  return response.data.data;
};

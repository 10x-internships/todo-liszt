import todoLisztAPI from '@configs/api';
import pathConfig from '@configs/path';

export const fetchUserProfile = async () => {
  const { url, method } = pathConfig.apis.getUserProfile;
  const response = await todoLisztAPI({ url, method });
  return response.data.data;
};

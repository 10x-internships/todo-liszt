import { getAccessToken } from '@utils/auth';
import { useGetUsers } from '@queries/hooks/users';

import CheckAuth from '@components/CheckAuth';

const Auth: React.FC = ({ children }) => {
  const accessToken = getAccessToken();

  const { isLoading } = useGetUsers({
    enabled: !!accessToken,
  });

  return <CheckAuth isLoading={isLoading}>{children}</CheckAuth>;
};

export default Auth;

import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import parseJSON from 'helpers/parseJSON';
import { updateData } from '@redux/actions/auth';
import { useEffect } from 'react';

const CheckAuth: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = Cookies.get('userData');

    if (userData) {
      dispatch(updateData(parseJSON(userData)));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default CheckAuth;

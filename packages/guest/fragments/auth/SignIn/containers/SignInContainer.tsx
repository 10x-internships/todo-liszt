import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import todoLisztAPI from '@config/api';

import { ISignInInputs } from '../types';
import { updateSignInData } from '@redux/actions/auth';
import SignIn from '../components/SignIn';

const SignInContainer = () => {
  const dispatch = useDispatch();

  const { isLoading, mutate, error } = useMutation(
    (userInfo: { email: string; password: string; type: string }) => {
      return todoLisztAPI.post('/sessions', userInfo);
    }
  );

  const onSignInSubmit: SubmitHandler<ISignInInputs> = (data) => {
    const signInData = {
      ...data,
      type: 'email',
    };
    mutate(signInData, {
      onSuccess: (signInData) => {
        dispatch(updateSignInData(signInData?.data.data));

        // Navigate to dashboard
        window.location.replace(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}`);
      },
    });
  };

  return (
    <SignIn onSignInSubmit={onSignInSubmit} isLoading={isLoading} error={error as AxiosError} />
  );
};

export default SignInContainer;

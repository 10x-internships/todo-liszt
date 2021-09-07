import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import pathConfig from '@configs/path';
import { updateSignUpData, updateSignInData } from '@redux/actions/auth';

import { checkSignin, checkSignUp } from '../apis/auth';

export const useSignIn = () => {
  const dispatch = useDispatch();

  return useMutation(checkSignin, {
    onSuccess: (signInData) => {
      dispatch(updateSignInData(signInData));
      window.location.replace(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}`);
    },
  });
};

export const useSignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(checkSignUp, {
    onSuccess: (signUpData) => {
      dispatch(updateSignUpData(signUpData));
      router.push(pathConfig.app.signIn);
    },
  });
};

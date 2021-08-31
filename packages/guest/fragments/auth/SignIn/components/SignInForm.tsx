import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Input, Button } from '@todo-liszt/common';
import { selectUserData } from '@redux/selectors/auth';
import validation from '@helpers/validation';
import getErrorMessage from '@helpers/getErrorMessage';
import ShowPassword from '@fragments/auth/components/ShowPassword';
import AuthForm from '@fragments/auth/components/AuthForm';

import { ISignInInputs, SignInFormProps } from '../types';

const SignInForm = ({ onSignInSubmit, isLoading, error }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignInInputs>();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'invalid-email',
        message: getErrorMessage(error.response?.data.code),
      });
    }
  }, [error, setError]);

  return (
    <AuthForm autoComplete="off" onSubmit={handleSubmit(onSignInSubmit)}>
      <Input
        label="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        defaultValue={userData ? userData.email : ''}
        isError={errors.email ? true : false}
        message={errors.email && errors.email.message}
        {...register('email', {
          required: validation.email.required,
          pattern: validation.email.pattern,
        })}
      />

      <Input
        label="password"
        id="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        inputIcon={<ShowPassword onShowPassword={handleShowPassword} />}
        isError={errors.password ? true : false}
        message={errors.password && errors.password.message}
        {...register('password', {
          required: validation.password.required,
          minLength: validation.password.minLength,
        })}
      />
      <Button type="submit" width="100%" isDisabled={isLoading}>
        {isLoading ? 'Please wait...' : 'Sign in'}
      </Button>
    </AuthForm>
  );
};

export default SignInForm;

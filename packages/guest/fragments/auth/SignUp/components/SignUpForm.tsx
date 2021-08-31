import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Input, Button } from '@todo-liszt/common';
import validation from '@helpers/validation';
import ShowPassword from '@fragments/auth/components/ShowPassword';
import AuthForm from '@fragments/auth/components/AuthForm';

import { SignUpFormProps, IFormInput } from '../types';
import getErrorMessage from '@helpers/getErrorMessage';

const SignUpForm = ({ onSubmit, isLoading, error }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<IFormInput>();
  const watchPassword = watch('password');

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'email-existed',
        message: getErrorMessage(error.response?.data.code),
      });
    }
  }, [error, setError]);

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Input
        label="email"
        id="email"
        type="email"
        placeholder="Enter your email"
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

      <Input
        label="confirm password"
        id="confirm-password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Confirm your password"
        inputIcon={<ShowPassword onShowPassword={handleShowPassword} />}
        isError={errors.confirmPassword ? true : false}
        message={errors.confirmPassword && errors.confirmPassword.message}
        {...register('confirmPassword', {
          required: validation.password.required,
          validate: (value) => value === watchPassword || 'Password not match',
        })}
      />

      <Button type="submit" width="100%" isDisabled={isLoading}>
        {isLoading ? 'Please wait...' : 'Sign up'}
      </Button>
    </AuthForm>
  );
};

export default SignUpForm;

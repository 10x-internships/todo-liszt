import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Eye } from '@todo-liszt/common';
import { Input, InputIcon, Button } from '@todo-liszt/common';

import AuthForm from '../../components/AuthForm';

import { SignUpFormProps, IFormInput } from '../types';

const SignUpForm = ({ onSubmit, isLoading, errorMessage }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<IFormInput>();
  const [showPassword, setShowPassword] = useState(false);

  const watchPassword = watch('password');

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  useEffect(() => {
    if (errorMessage) {
      setError('email', {
        type: 'existed',
        message: errorMessage,
      });
    }
  }, [errorMessage, setError]);

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
          required: {
            value: true,
            message: 'This field is required',
          },
          pattern: {
            value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            message: 'Invalid email address',
          },
        })}
      />

      <Input
        label="password"
        id="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        inputIcon={
          <InputIcon onClick={handleShowPassword}>
            <Eye />
          </InputIcon>
        }
        isError={errors.password ? true : false}
        message={errors.password && errors.password.message}
        {...register('password', {
          required: {
            value: true,
            message: 'This field is required',
          },
          minLength: {
            value: 8,
            message: 'Password must have 8+ characters',
          },
        })}
      />

      <Input
        label="confirm password"
        id="confirm-password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Confirm your password"
        inputIcon={
          <InputIcon onClick={handleShowPassword}>
            <Eye />
          </InputIcon>
        }
        isError={errors.confirmPassword ? true : false}
        message={errors.confirmPassword && errors.confirmPassword.message}
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'This field is required',
          },
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

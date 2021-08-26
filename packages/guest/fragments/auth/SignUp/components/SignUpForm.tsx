import { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';

import { Eye } from '@todo-liszt/common';
import { Input, InputIcon, Button } from '@todo-liszt/common';

import AuthForm from '../../components/AuthForm';

interface SignUpForm {}

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const accountInfo = {
      email: data.email,
      password: data.password,
    };
    axios
      .post('http://api-todo-liszt.sestud.io/api/v1.0/users', accountInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Input
        label="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register('email', {
          required: true,
        })}
        isError={errors.email ? true : false}
        message={errors.email && 'Email is required'}
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
        message={errors.password && 'Password is required'}
        {...register('password', {
          required: true,
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
        message={errors.confirmPassword && 'Confirm Password is required'}
        {...register('confirmPassword', {
          required: true,
        })}
      />

      <Button type="submit" width="100%">
        Sign up
      </Button>
    </AuthForm>
  );
};

export default SignUpForm;

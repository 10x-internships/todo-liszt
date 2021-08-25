import { useState } from 'react';

import { Eye } from '@todo-liszt/common';
import { Input, InputIcon, Button } from '@todo-liszt/common';

import AuthForm from '../components/AuthForm';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  return (
    <AuthForm autoComplete="off">
      <Input label="email" id="email" type="email" placeholder="Enter your email" required />
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
        required
      />
      <Button type="submit" width="100%">
        Sign in
      </Button>
    </AuthForm>
  );
};

export default SignInForm;

import { useState } from 'react';

import AuthForm from '../components/AuthForm';
import { Input, InputIcon } from '@components/Input';
import { Button } from '@components/Button';
import { Eye } from '@components/Icons';

const SignUpForm = () => {
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
        required
      />
      <Button type="submit" css={{ width: '100%' }}>
        Sign up
      </Button>
    </AuthForm>
  );
};

export default SignUpForm;

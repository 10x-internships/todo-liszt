import { useState } from 'react';

import AuthForm from '../components/AuthForm';
import { Input, InputIcon } from '@components/Input';
import { Button } from '@components/Button';
import { Eye } from '@components/Icons';

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
          <InputIcon onClick={handleShowPassword} css={{ cursor: 'pointer' }}>
            <Eye />
          </InputIcon>
        }
        required
      />
      <Button type="submit" css={{ width: '100%' }}>
        Sign in
      </Button>
    </AuthForm>
  );
};

export default SignInForm;

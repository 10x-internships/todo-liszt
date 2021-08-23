import AuthForm from '../components/AuthForm';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const ForgetPasswordForm = () => {
  return (
    <AuthForm autoComplete="off">
      <Input label="email" id="email" type="email" placeholder="Enter your email" required />

      <Button type="submit" css={{ width: '100%' }}>
        Reset password
      </Button>
    </AuthForm>
  );
};

export default ForgetPasswordForm;

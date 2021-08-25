import AuthForm from '../components/AuthForm';
import { Input, Button } from '@todo-liszt/common';

const ForgetPasswordForm = () => {
  return (
    <AuthForm autoComplete="off">
      <Input label="email" id="email" type="email" placeholder="Enter your email" required />

      <Button type="submit" width="100%">
        Reset password
      </Button>
    </AuthForm>
  );
};

export default ForgetPasswordForm;

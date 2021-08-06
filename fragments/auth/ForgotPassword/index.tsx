import AuthLogo from '../components/AuthLogo';
import AuthTitle from '../components/AuthTitle';

import ForgetPasswordForm from './ForgetPasswordForm';
import AuthHaveAccount from '../components/AuthHaveAccount';

const SignUp = () => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Forgot Password</AuthTitle>
      <ForgetPasswordForm />
      <AuthHaveAccount />
    </>
  );
};

export default SignUp;

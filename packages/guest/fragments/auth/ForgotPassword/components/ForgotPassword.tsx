import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';

import ForgotPasswordForm from './ForgotPasswordForm';
import AuthHaveAccount from '../../components/AuthHaveAccount';

const SignUp = () => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Forgot Password</AuthTitle>
      <ForgotPasswordForm />
      <AuthHaveAccount />
    </>
  );
};

export default SignUp;

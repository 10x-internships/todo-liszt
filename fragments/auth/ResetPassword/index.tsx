import AuthLogo from '../components/AuthLogo';
import AuthTitle from '../components/AuthTitle';

import ResetPasswordForm from './ResetPasswordForm';
import AuthHaveAccount from '../components/AuthHaveAccount';

const ResetPassword = () => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Reset Password</AuthTitle>
      <ResetPasswordForm />
      <AuthHaveAccount />
    </>
  );
};

export default ResetPassword;

import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';

import ResetPasswordForm from './ResetPasswordForm';

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

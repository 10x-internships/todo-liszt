import AuthLogo from '../../components/AuthLogo';
import AuthTitle from '../../components/AuthTitle';
import AuthHaveAccount from '../../components/AuthHaveAccount';

import SignUpForm from '../components/SignUpForm';

const SignUpContainer = () => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign up</AuthTitle>
      <SignUpForm />
      <AuthHaveAccount />
    </>
  );
};

export default SignUpContainer;

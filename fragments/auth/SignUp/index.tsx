import AuthLogo from '../components/AuthLogo';
import AuthTitle from '../components/AuthTitle';

import SignUpForm from './SignUpForm';
import AuthHaveAccount from '../components/AuthHaveAccount';

const SignUp = () => {
  return (
    <>
      <AuthLogo />
      <AuthTitle>Sign up</AuthTitle>
      <SignUpForm />
      <AuthHaveAccount />
    </>
  );
};

export default SignUp;

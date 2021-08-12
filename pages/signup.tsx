import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import SignUpContent from '@fragments/auth/SignUp';

import signupBg from '../public/assets/images/signup.jpg';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign up | Todo Liszt</title>
      </Head>

      <SignUpContent />
    </>
  );
}

// eslint-disable-next-line react/display-name
SignUp.getLayout = (page: React.ReactNode) => (
  <AuthLayout src={signupBg} alt="A beautiful lady">
    {page}
  </AuthLayout>
);

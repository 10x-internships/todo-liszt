import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import SignInContent from '@fragments/auth/SignIn';
import signinBg from '../public/assets/images/signin.jpg';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign in | Todo Liszt</title>
      </Head>

      <SignInContent />
    </>
  );
}

// eslint-disable-next-line react/display-name
SignIn.getLayout = (page: React.ReactNode) => (
  <AuthLayout src={signinBg} alt="Orange Fox">
    {page}
  </AuthLayout>
);

import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import ForgotPasswordContent from '@fragments/auth/ForgotPassword';
import forgotBg from '../public/assets/images/forgot-password.jpg';

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password | Todo Liszt</title>
        <meta name="description" content="Sign in to the best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ForgotPasswordContent />
    </>
  );
}

// eslint-disable-next-line react/display-name
ForgotPassword.getLayout = (page: React.ReactNode) => (
  <AuthLayout src={forgotBg} alt="Forgot password background">
    {page}
  </AuthLayout>
);

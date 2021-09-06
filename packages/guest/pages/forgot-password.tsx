import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import ForgotPasswordScene from '@fragments/auth/ForgotPassword';

import forgotBg from '../public/assets/images/forgot-password.jpg';

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password | Todo Liszt</title>
      </Head>

      <ForgotPasswordScene />
    </>
  );
}

// eslint-disable-next-line react/display-name
ForgotPassword.getLayout = (page: React.ReactNode) => (
  <AuthLayout src={forgotBg} alt="Forgot password background">
    {page}
  </AuthLayout>
);

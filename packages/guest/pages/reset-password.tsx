import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import ResetPasswordScene from '@fragments/auth/ResetPassword';

import resetBg from '../public/assets/images/reset-password.jpg';

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>Reset Password | Todo Liszt</title>
      </Head>
      <ResetPasswordScene />
    </>
  );
}

// eslint-disable-next-line react/display-name
ResetPassword.getLayout = (page: React.ReactNode) => (
  <AuthLayout src={resetBg} alt="A beautiful cat">
    {page}
  </AuthLayout>
);

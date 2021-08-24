import Head from 'next/head';

import { AuthLayout } from '@components/Layout';

import resetBg from '../public/assets/images/reset-password.jpg';
import ResetPassword from '@fragments/auth/ResetPassword';

export default function ResetPasswordPage() {
  return (
    <>
      <Head>
        <title>Reset Password | Todo Liszt</title>
      </Head>
      <ResetPassword />
    </>
  );
}

// eslint-disable-next-line react/display-name
ResetPasswordPage.getLayout = (page: React.ReactNode) => (
  <AuthLayout src={resetBg} alt="A beautiful cat">
    {page}
  </AuthLayout>
);

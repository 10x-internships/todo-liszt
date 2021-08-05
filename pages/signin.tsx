import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import SignInContent from '@fragments/auth/SignIn';
import signinBg from '../public/assets/images/signin.jpg';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign in | Todo Liszt</title>
        <meta name="description" content="Sign in to the best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout src={signinBg} alt="Orange Fox">
        <SignInContent />
      </AuthLayout>
    </>
  );
}

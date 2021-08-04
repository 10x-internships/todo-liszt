import Head from 'next/head';

import { AuthLayout } from '@components/Layout';
import SignInFragments from '@fragments/authentication/SignIn';
import signinBg from '../public/assets/images/signin.jpg';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign in | Todo Liszt</title>
        <meta name="description" content="Sign in to the best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout src={signinBg}>
        <SignInFragments />
      </AuthLayout>
    </>
  );
}

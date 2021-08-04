import Head from 'next/head';

import { AuthLayout } from '@components/Layout';

import signupBg from '../public/assets/images/signup.jpg';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign up | Todo Liszt</title>
        <meta name="description" content="Sign in to the best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout src={signupBg}>Sign up content here</AuthLayout>
    </>
  );
}

import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Calendar | Todo Liszt</title>
        <meta name="description" content="The best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Calendar content</h1>
    </>
  );
}

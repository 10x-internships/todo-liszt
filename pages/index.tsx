import Head from 'next/head';
import { GuestLayout } from '@components/Layout';
import ComingSoon from '@components/ComingSoon';

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo Liszt</title>
      </Head>

      <ComingSoon />
    </>
  );
}

// eslint-disable-next-line react/display-name
Home.getLayout = (page: React.ReactNode) => <GuestLayout>{page}</GuestLayout>;

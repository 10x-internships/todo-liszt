import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';
import {
  ListHeader,
  ListEmpty,
  ListWrapper,
  ListListing,
  ListFilter,
} from '@fragments/dashboard/List';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Todo Liszt</title>
        <meta name="description" content="The best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <ListHeader />
        <ListFilter />
        <ListWrapper isEmpty={false}>
          {/* <ListEmpty /> */}
          <ListListing />
        </ListWrapper>
      </DashboardLayout>
    </>
  );
}

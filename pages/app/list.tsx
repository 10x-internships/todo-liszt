import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';
import { ListHeader, ListEmpty, ListWrapper, ListListing, ListFilter } from '@fragments/app/List';

export default function List() {
  return (
    <>
      <Head>
        <title>List | Todo Liszt</title>
        <meta name="description" content="The best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListHeader />
      <ListFilter />
      <ListWrapper isEmpty={false}>
        {/* <ListEmpty /> */}
        <ListListing />
      </ListWrapper>
    </>
  );
}

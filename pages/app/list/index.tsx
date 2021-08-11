import Head from 'next/head';
import Link from 'next/link';

import { DashboardLayout } from '@components/Layout';
import { ListHeader, ListEmpty, ListWrapper, ListListing, ListFilter } from '@fragments/app/List';
import ListPagination from '@fragments/app/List/ListPagination';
import { Button, ButtonSizes } from '@components/Button';
import SearchBox from '@components/SearchBox';

export default function List() {
  return (
    <>
      <Head>
        <title>List | Todo Liszt</title>
        <meta name="description" content="The best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListHeader title="List">
        <form>
          <SearchBox placeholder="Search everything" />
        </form>
        <Link href="/app/list/create" passHref>
          <Button size={ButtonSizes.Medium}>Create</Button>
        </Link>
      </ListHeader>

      <ListFilter />

      <ListWrapper isEmpty={false}>
        {/* <ListEmpty /> */}
        <ListListing />
      </ListWrapper>
      <ListPagination total={50} />
    </>
  );
}

// eslint-disable-next-line react/display-name
List.getLayout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

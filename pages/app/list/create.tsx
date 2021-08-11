import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';
import { ListForm, ListHeader, ListWrapper } from '@fragments/app/List';
import React from 'react';
import { Button, ButtonVariants, ButtonSizes } from '@components/Button';
import { useRouter } from 'next/router';

export default function CreateList() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create List | Todo Liszt</title>
        <meta name="description" content="The best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form autoComplete="off">
        <ListHeader title="Create list">
          <Button
            variant={ButtonVariants.Theme}
            size={ButtonSizes.Medium}
            onClick={() => router.replace('/app/list')}
          >
            Cancel
          </Button>
          <Button type="submit" size={ButtonSizes.Medium}>
            Create
          </Button>
        </ListHeader>

        <ListForm />
      </form>
    </>
  );
}

// eslint-disable-next-line react/display-name
CreateList.getLayout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

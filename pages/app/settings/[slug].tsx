import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';
import { ListHeader } from '@fragments/app/List';
import Settings from '@fragments/app/Settings';

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings | Todo Liszt</title>
      </Head>

      <ListHeader title="Settings" />
      <Settings />
    </>
  );
}

// eslint-disable-next-line react/display-name
SettingsPage.getLayout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

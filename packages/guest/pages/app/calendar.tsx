import Head from 'next/head';

import { DashboardLayout } from '@components/Layout';
import { ListHeader } from '@fragments/app/List';
import Calendar from '@fragments/app/Calendar';

export default function CalendarPage() {
  return (
    <>
      <Head>
        <title>Calendar | Todo Liszt</title>
      </Head>

      <ListHeader title="Calendar" />
      <Calendar startDayOfWeek="monday" />
    </>
  );
}

// eslint-disable-next-line react/display-name
CalendarPage.getLayout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

import Head from 'next/head';
import dayjs from 'dayjs';

import { DashboardLayout } from '@components/Layout';
import { ListHeader } from '@fragments/app/List';
import { CalendarHeader, CalendarTable } from '@fragments/app/Calendar';

export default function Calendar() {
  const start = dayjs().startOf('month');
  const end = dayjs().endOf('month');
  console.log(start.get('day'), end.get('day'));

  return (
    <>
      <Head>
        <title>Calendar | Todo Liszt</title>
      </Head>
      <ListHeader title="Calendar" />
      <CalendarHeader />
      <CalendarTable />
    </>
  );
}

// eslint-disable-next-line react/display-name
Calendar.getLayout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

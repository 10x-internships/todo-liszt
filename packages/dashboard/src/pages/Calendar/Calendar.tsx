import PageHeader from "../components/PageHeader";

import Calendar from "../../fragments/calender-page";

const CalendarPage = () => {
  return (
    <>
      <PageHeader title="Calendar" />
      <Calendar startDayOfWeek="monday" />
    </>
  );
};

export default CalendarPage;

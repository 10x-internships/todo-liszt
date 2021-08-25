import SceneHeader from "../../components/SceneHeader";

import Calendar from "../../fragments/calender-page";

const CalendarPage = () => {
  return (
    <>
      <SceneHeader title="Calendar" />
      <Calendar startDayOfWeek="monday" />
    </>
  );
};

export default CalendarPage;

import * as Styled from './components';

const daysOfWeek = ['MON', 'TUE', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarTable = () => {
  return (
    <Styled.Wrapper>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
      </table>
    </Styled.Wrapper>
  );
};

export default CalendarTable;

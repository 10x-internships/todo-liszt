import { useHistory } from "react-router-dom";

import { Text, TextVariants, TypoTags } from "@todo-liszt/common";

import * as Styled from "./components";
interface CalendarTaskProps {
  taskId?: string;
  taskColor?: string;
  children?: React.ReactNode;
}

const CalendarTask = ({ taskColor, taskId, children }: CalendarTaskProps) => {
  const history = useHistory();

  return (
    <Styled.CalendarTask
      taskColor={taskColor}
      onClick={() => history.push(`/app/list/${taskId}`)}
    >
      <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
        {children}
      </Text>
    </Styled.CalendarTask>
  );
};

export default CalendarTask;

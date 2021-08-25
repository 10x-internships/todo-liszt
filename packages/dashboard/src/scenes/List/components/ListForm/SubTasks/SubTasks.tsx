import { Heading, HeadingVariants, TypoTags } from "@todo-liszt/common";

import AddSubTask from "./AddSubTask";
import { SubTasksList, SubTasksWrapper, SubTasksContent } from "./components";
import SubTaskItem from "./SubTaskItem";

const SubTasks = () => {
  return (
    <SubTasksWrapper>
      <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
        Sub-tasks
      </Heading>

      <SubTasksContent>
        <SubTasksList>
          <SubTaskItem />
          <SubTaskItem />
          <SubTaskItem />
        </SubTasksList>

        <AddSubTask />
      </SubTasksContent>
    </SubTasksWrapper>
  );
};

export default SubTasks;

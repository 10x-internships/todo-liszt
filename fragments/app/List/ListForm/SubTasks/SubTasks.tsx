import AddSubTask from './AddSubTask';
import { SubTaskList } from './components';
import SubTaskItem from './SubTaskItem';

const SubTasks = () => {
  return (
    <>
      <SubTaskList>
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
      </SubTaskList>

      <AddSubTask />
    </>
  );
};

export default SubTasks;

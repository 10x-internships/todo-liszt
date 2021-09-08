import { Heading, HeadingVariants, TypoTags } from '@todo-liszt/common';
import { useTranslation } from 'react-i18next';

import AddSubTask from './AddSubTask';
import { SubTasksList, SubTasksWrapper, SubTasksContent } from './components';
import SubTaskItem from './SubTaskItem';

const SubTasks = () => {
  const { t } = useTranslation();

  return (
    <SubTasksWrapper>
      <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
        {t('scene.Lists.ListForm.SubTasks.title')}
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

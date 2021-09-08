import useModal from '@hooks/modal';
import {
  Button,
  ButtonColors,
  ButtonVariants,
  Modal,
  Heading,
  HeadingVariants,
  TypoTags,
  Input,
} from '@todo-liszt/common';
import { useTranslation } from 'react-i18next';

import { AddSubTaskForm, AddSubTaskAction } from './components';

const AddSubTask = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const { t } = useTranslation();

  return (
    <>
      <Button bgColor={ButtonColors.Primary_02} onClick={handleOpenModal} type="button">
        {t('scene.Lists.ListForm.AddSubTasks.Button')}
      </Button>

      <Modal onCloseModal={handleCloseModal} showModal={isModalOpen}>
        <AddSubTaskForm>
          <Heading as={TypoTags.H3} variant={HeadingVariants.Headline4}>
            {t('scene.Lists.ListForm.AddSubTasks.Modal.title')}
          </Heading>
          <Input
            id="name"
            label={t('scene.Lists.ListForm.NameInput.label')}
            placeholder={t('scene.Lists.ListForm.NameInput.placeholder')}
          />
          <Input
            as="textarea"
            id="desc"
            label={t('scene.Lists.ListForm.DescInput.label')}
            placeholder={t('scene.Lists.ListForm.DescInput.placeholder')}
          />

          <AddSubTaskAction>
            <Button type="button" variant={ButtonVariants.Theme} onClick={handleCloseModal}>
              {t('scene.Lists.ListForm.AddSubTasks.Button.cancel')}
            </Button>
            <Button>{t('scene.Lists.ListForm.AddSubTasks.Button.create')}</Button>
          </AddSubTaskAction>
        </AddSubTaskForm>
      </Modal>
    </>
  );
};

export default AddSubTask;

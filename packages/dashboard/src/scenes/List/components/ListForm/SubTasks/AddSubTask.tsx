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

import { AddSubTaskForm, AddSubTaskAction } from './components';

const AddSubTask = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <Button bgColor={ButtonColors.Primary_02} onClick={handleOpenModal} type="button">
        Add sub-task
      </Button>

      <Modal onCloseModal={handleCloseModal} showModal={isModalOpen}>
        <AddSubTaskForm>
          <Heading as={TypoTags.H3} variant={HeadingVariants.Headline4}>
            Add sub-task
          </Heading>
          <Input label="Name" id="name" placeholder="Enter sub-task name" />
          <Input as="textarea" label="Description" id="desc" placeholder="Enter Description" />

          <AddSubTaskAction>
            <Button type="button" variant={ButtonVariants.Theme} onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button>Add</Button>
          </AddSubTaskAction>
        </AddSubTaskForm>
      </Modal>
    </>
  );
};

export default AddSubTask;

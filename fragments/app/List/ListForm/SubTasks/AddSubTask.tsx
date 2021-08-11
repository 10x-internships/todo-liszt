import { useState } from 'react';

import { colors } from '@styles/theme';
import { Button, ButtonVariants } from '@components/Button';
import Modal from '@components/Modal';
import { Heading, HeadingVariants, TypoTags } from '@components/Typography';
import { Input } from '@components/Input';
import { AddSubTaskForm, AddSubTaskAction } from './components';

const AddSubTask = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button
        css={{
          background: colors.primary['02'],
          '&:hover': { background: colors.primary['02'] },
        }}
        onClick={() => setShowModal(true)}
        type="button"
      >
        Add sub-task
      </Button>

      {showModal && (
        <Modal onCloseModal={handleCloseModal}>
          <AddSubTaskForm>
            <Heading as={TypoTags.H3} variant={HeadingVariants.Headline4}>
              Add sub-task
            </Heading>
            <Input label="Name" id="name" placeholder="Enter sub-task name" />
            <Input as="textarea" label="Description" id="desc" placeholder="Enter Description" />

            <AddSubTaskAction>
              <Button variant={ButtonVariants.Theme} onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button>Add</Button>
            </AddSubTaskAction>
          </AddSubTaskForm>
        </Modal>
      )}
    </>
  );
};

export default AddSubTask;

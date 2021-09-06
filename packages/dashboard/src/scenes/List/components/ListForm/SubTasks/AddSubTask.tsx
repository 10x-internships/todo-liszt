import { useState } from "react";

import {
  Button,
  ButtonColors,
  ButtonVariants,
  Modal,
  Heading,
  HeadingVariants,
  TypoTags,
  Input,
} from "@todo-liszt/common";

import { AddSubTaskForm, AddSubTaskAction } from "./components";

const AddSubTask = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button
        bgColor={ButtonColors.Primary_02}
        onClick={() => setShowModal(true)}
        type="button"
      >
        Add sub-task
      </Button>

      <Modal onCloseModal={handleCloseModal} showModal={showModal}>
        <AddSubTaskForm>
          <Heading as={TypoTags.H3} variant={HeadingVariants.Headline4}>
            Add sub-task
          </Heading>
          <Input label="Name" id="name" placeholder="Enter sub-task name" />
          <Input
            as="textarea"
            label="Description"
            id="desc"
            placeholder="Enter Description"
          />

          <AddSubTaskAction>
            <Button
              type="button"
              variant={ButtonVariants.Theme}
              onClick={handleCloseModal}
            >
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

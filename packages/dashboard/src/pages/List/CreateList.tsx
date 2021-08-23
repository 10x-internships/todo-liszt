import { Button, ButtonVariants, ButtonSizes } from "@todo-liszt/common";

import { ListHeader, ListForm } from "../../fragments/listpage";

const CreateList = () => {
  return (
    <>
      <form autoComplete="off">
        <ListHeader title="Create list">
          <Button variant={ButtonVariants.Theme} size={ButtonSizes.Medium}>
            Cancel
          </Button>
          <Button type="submit" size={ButtonSizes.Medium}>
            Create
          </Button>
        </ListHeader>

        <ListForm />
      </form>
    </>
  );
};

export default CreateList;

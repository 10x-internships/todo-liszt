import { Button, ButtonVariants, ButtonSizes } from "@todo-liszt/common";
import { useHistory } from "react-router-dom";

import { ListForm } from "../../fragments/list-page";

import PageHeader from "../components/PageHeader";

const CreateList = () => {
  const history = useHistory();

  return (
    <>
      <form autoComplete="off">
        <PageHeader title="Create list">
          <Button
            variant={ButtonVariants.Theme}
            size={ButtonSizes.Medium}
            onClick={() => history.replace("/app/list")}
          >
            Cancel
          </Button>
          <Button type="submit" size={ButtonSizes.Medium}>
            Create
          </Button>
        </PageHeader>

        <ListForm />
      </form>
    </>
  );
};

export default CreateList;

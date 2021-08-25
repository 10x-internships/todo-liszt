import { Button, ButtonVariants, ButtonSizes } from "@todo-liszt/common";
import { useHistory } from "react-router-dom";

import { ListForm } from "../../components";

import SceneHeader from "../../../../components/SceneHeader";

const CreateListContainer = () => {
  const history = useHistory();

  return (
    <form autoComplete="off">
      <SceneHeader title="Create list">
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
      </SceneHeader>

      <ListForm />
    </form>
  );
};

export default CreateListContainer;

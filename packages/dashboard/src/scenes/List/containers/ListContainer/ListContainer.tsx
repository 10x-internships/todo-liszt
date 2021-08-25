import { Link } from "react-router-dom";

import { SearchBox, Button, ButtonSizes } from "@todo-liszt/common";

import SceneHeader from "../../../../components/SceneHeader";

import {
  ListWrapper,
  ListListing,
  ListFilter,
  ListPagination,
} from "../../components";

import listItemTestData from "../../components/listItemTestData";

const List = () => {
  return (
    <>
      <SceneHeader title="List">
        <form>
          <SearchBox placeholder="Search everything" />
        </form>
        <Link to="/app/list/create">
          <Button size={ButtonSizes.Medium}>Create</Button>
        </Link>
      </SceneHeader>

      <ListFilter />

      <ListWrapper isEmpty={false}>
        <ListListing items={listItemTestData} />
      </ListWrapper>
      <ListPagination total={50} />
    </>
  );
};

export default List;

import { useHistory } from "react-router-dom";

import { Text, TextVariants, TypoTags, Checkbox } from "@todo-liszt/common";

import * as Styled from "./components";
import ListItemContent from "../ListItemContent";
import { itemDataTypes } from "../listItemTestData";

interface ListItemProps {
  item: itemDataTypes;
}

const ListsItem = ({ item }: ListItemProps) => {
  const history = useHistory();

  const itemDetails = (event: React.MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.closest("label")) return;
    history.push(`${history.location.pathname}/${item.id}`);
  };

  return (
    <Styled.ListItem onClick={itemDetails}>
      <Checkbox />
      <ListItemContent {...item} />
      <Styled.SubTasks>
        <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
          {item.subTasks}
        </Text>
      </Styled.SubTasks>
    </Styled.ListItem>
  );
};

export default ListsItem;

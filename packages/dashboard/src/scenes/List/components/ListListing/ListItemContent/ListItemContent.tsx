import { Text, TextVariants, TypoTags } from "@todo-liszt/common";
import * as Styled from "./components";

interface ListItemContentProps {
  schedule?: string;
  color?: string;
  task?: string;
}

const ListItemContent = ({ schedule, color, task }: ListItemContentProps) => {
  return (
    <Styled.ListItemContent>
      <Styled.ItemTextWrapper>
        <Styled.ItemColor color={color!} />
        <Text as={TypoTags.Span} variant={TextVariants.Body2}>
          {task}
        </Text>
      </Styled.ItemTextWrapper>

      {schedule && (
        <Styled.ItemSchedule>
          <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
            {schedule}
          </Text>
        </Styled.ItemSchedule>
      )}
    </Styled.ListItemContent>
  );
};

export default ListItemContent;

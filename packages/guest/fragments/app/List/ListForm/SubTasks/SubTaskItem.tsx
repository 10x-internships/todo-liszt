import Checkbox from '@components/Checkbox';
import { Eraser } from '@components/Icons';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import * as Styled from './components';

const SubTaskItem = () => {
  return (
    <Styled.SubTaskItem>
      <Checkbox />

      <Styled.SubTaskItemContent>
        <Text as={TypoTags.Span} variant={TextVariants.Body2}>
          Office Equipments
        </Text>
        <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
          Get the coffee machine fixed
        </Text>
      </Styled.SubTaskItemContent>

      <Styled.DeleteButton title="Remove this sub-task">
        <Eraser />
      </Styled.DeleteButton>
    </Styled.SubTaskItem>
  );
};

export default SubTaskItem;

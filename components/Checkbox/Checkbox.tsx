import * as Styled from './components';
import { Check } from '../../components/Icons';
import { CheckboxProps } from './types';
import { Text, TypoTags, TextVariants } from '../../components/Typography';

const Checkbox = (props: CheckboxProps) => {
  const { id, label, isChecked, isDisabled, ...others } = props;

  return (
    <Styled.Label htmlFor={id} isDisabled={isDisabled}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        disabled={isDisabled}
        {...others}
      />
      <Styled.Checkbox>
        <Check />
      </Styled.Checkbox>
      {label && (
        <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
          {label}
        </Text>
      )}
    </Styled.Label>
  );
};

export default Checkbox;

import * as Styled from './components';
import { RadioProps } from './types';
import { Text, TypoTags, TextVariants } from '../../components/Typography';

const Radio = ({
  label,
  id,
  defaultChecked,
  isChecked,
  isDisabled,
  ...others
}: RadioProps) => {
  return (
    <Styled.Label htmlFor={id} isDisabled={isDisabled}>
      <input
        type="radio"
        id={id}
        checked={isChecked}
        defaultChecked={defaultChecked}
        disabled={isDisabled}
        {...others}
      />

      <Styled.Radio />

      {label && (
        <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
          {label}
        </Text>
      )}
    </Styled.Label>
  );
};

export default Radio;

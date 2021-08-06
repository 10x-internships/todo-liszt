import * as Styled from './components';
import { InputProps } from './types';
import { Text, TextVariants, TypoTags } from '../Typography';

const Input = (props: InputProps) => {
  const { label, id, type, message, isDisabled, ...others } = props;

  return (
    <Styled.InputWrapper>
      {label && (
        <Styled.InputLabel htmlFor={id}>
          <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
            {label}
          </Text>
        </Styled.InputLabel>
      )}

      <Styled.InputGroup>
        <Styled.Input type={type || 'text'} id={id} disabled={isDisabled} {...others} />
        {others.inputIcon}
      </Styled.InputGroup>

      {message && (
        <Styled.InputMessage {...others}>
          <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
            {message}
          </Text>
        </Styled.InputMessage>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;

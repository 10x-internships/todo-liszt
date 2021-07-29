import * as Styled from './components';
import { InputProps } from './types';
import { Text, TextVariants, TypoTags } from '../Typography';
import { Eye } from '../Icons';

const Input = (props: InputProps) => {
  const { label, id, isError, errorMessage, ...others } = props;

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
        <Styled.Input type="text" id={id} isError={isError} {...others} />

        {/* <Styled.InputIcon>
          <Eye />
        </Styled.InputIcon> */}
      </Styled.InputGroup>
      {isError && (
        <Styled.ErrorMessage>
          <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
            {errorMessage}
          </Text>
        </Styled.ErrorMessage>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;

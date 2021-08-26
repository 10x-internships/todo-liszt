import { forwardRef } from "react";

import { Text, TextVariants, TypoTags } from "../Typography";

import * as Styled from "./components";
import { InputProps } from "./types";
import InputLabel from "./InputLabel";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, id, type, message, isDisabled, as, ...others } = props;

  return (
    <Styled.InputWrapper>
      {label && <InputLabel id={id} label={label} />}

      <Styled.InputGroup>
        {as === "textarea" && (
          <Styled.Input
            as="textarea"
            id={id}
            ref={ref}
            disabled={isDisabled}
            {...others}
          />
        )}

        {!as && (
          <Styled.Input
            type={type || "text"}
            id={id}
            ref={ref}
            disabled={isDisabled}
            {...others}
          />
        )}
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
});

export default Input;

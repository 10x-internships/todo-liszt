import styled from "@emotion/styled";

import textStyles from "./textStyles";
import { TypographyProps, TextVariants } from "../types";
import base from "../base";

interface TextProps extends TypographyProps {
  variant: TextVariants;
  isBold?: boolean;
}

const getFontWeight = (variant: TextVariants) => {
  switch (variant) {
    case TextVariants.Body1:
      return 600;
    case TextVariants.Body2:
      return 500;
    case TextVariants.Caption1:
      return 500;
    case TextVariants.Caption2:
      return 600;
    default:
      return 400;
  }
};

// Using for Body, Caption, Hairline and Button text
const Text = styled.div<TextProps>`
  ${({ variant = TextVariants.Body1 }) => base(textStyles[variant])}
  ${({ isBold, variant }) => isBold && `font-weight: ${getFontWeight(variant)}`}
  ${({ textCenter }) => textCenter && `text-align: center`}
`;

export default Text;

import styled from '@emotion/styled';

import textStyles from './textStyles';
import { TypographyProps, TextVariants } from '../types';
import base from '../base';

interface TextProps extends TypographyProps {
  variant: TextVariants;
  isBold?: boolean;
}

// Using for Body, Caption, Hairline and Button text
const Text = styled.div<TextProps>`
  ${({ variant = TextVariants.Body1 }) => base(textStyles[variant])}
  ${({ isBold }) => isBold && `font-weight: 700`};
  ${({ textCenter }) => textCenter && `text-align: center`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform}`}
`;

export default Text;

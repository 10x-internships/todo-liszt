import styled from '@emotion/styled';

import headingStyles from './headingStyles';
import { TypographyProps, HeadingVariants } from '../types';
import base from '../base';

interface HeadingProps extends TypographyProps {
  variant: HeadingVariants;
}

// Using for Hero and Headline heading text
const Heading = styled.div<HeadingProps>`
  ${({ variant = HeadingVariants.Hero }) => base(headingStyles[variant])}
  ${({ textCenter }) => textCenter && `text-align: center`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform}`}
`;

export default Heading;

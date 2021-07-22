import { css } from '@emotion/react';
import styled from '@emotion/styled';

import headingStyles from './headingStyles';
import { TypographySizes } from '../types';

type HeadingProps = {
  variant: 'hero' | 'headline';
  size?: TypographySizes;
};

const Heading = styled.div<HeadingProps>`
  font-weight: 700;

  ${({ variant = 'heading', size = TypographySizes.SM }) => {
    if (variant === 'hero') {
      return css`
        font-size: ${headingStyles.hero.fontSize};
        line-height: ${headingStyles.hero.lineHeight};
        letter-spacing: : ${headingStyles.hero.letterSpacing};
      `;
    }
    if (variant === 'headline') {
      return css`
        font-size: ${headingStyles.headline.fontSize[size]};
        line-height: ${headingStyles.headline.lineHeight[size]};
        letter-spacing: : ${headingStyles.headline.letterSpacing[size]};
      `;
    }
  }}
`;

export default Heading;

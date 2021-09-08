import { css } from '@emotion/react';

import { BaseStyles } from './types';

const base = ({
  fontFamily = 'Source Sans Pro',
  fontSize = '1rem',
  fontWeight,
  lineHeight = '1.5rem',
  letterSpacing,
  textTransform,
}: BaseStyles) =>
  css`
    font-family: ${fontFamily}, sans-serif;
    font-size: ${fontSize};
    ${fontWeight && `font-weight: ${fontWeight};`}
    line-height: ${lineHeight};
    ${letterSpacing && `letter-spacing: ${letterSpacing};`}
    ${textTransform && `text-transform: ${textTransform};`}
  `;

export default base;

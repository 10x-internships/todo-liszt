import { css } from '@emotion/react';

import { BaseStyles } from './types';

const base = ({
  fontFamily = 'DM Sans',
  fontSize = '1rem',
  fontWeight = 400,
  lineHeight = '1.5rem',
  letterSpacing,
}: BaseStyles) =>
  css`
    font-family: ${fontFamily}, sans-serif;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    ${letterSpacing && `letter-spacing: ${letterSpacing};`}
  `;

export default base;

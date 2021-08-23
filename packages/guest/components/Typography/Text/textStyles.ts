import { BaseStyles } from '../types';

interface TextType {
  body1: BaseStyles;
  body2: BaseStyles;
  caption1: BaseStyles;
  caption2: BaseStyles;
  hairline1: BaseStyles;
  hairline2: BaseStyles;
  button1: BaseStyles;
  button2: BaseStyles;
}

const textStyles: TextType = {
  body1: {
    fontFamily: 'Poppins',
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  body2: {
    fontFamily: 'Poppins',
    fontSize: '1rem',
    lineHeight: '1rem',
  },
  caption1: {
    fontFamily: 'Poppins',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  },
  caption2: {
    fontFamily: 'Poppins',
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
  },
  hairline1: {
    fontFamily: 'Poppins',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1rem',
    textTransform: 'uppercase',
  },
  hairline2: {
    fontFamily: 'Poppins',
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '0.75rem',
    textTransform: 'uppercase',
  },
  button1: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
  button2: {
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
};

export default textStyles;

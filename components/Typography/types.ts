export interface TypographyProps {
  textCenter?: boolean;
}

export interface BaseStyles {
  fontFamily?: 'DM Sans' | 'Poppins';
  fontSize: string;
  fontWeight?: number;
  lineHeight: string;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'capitalize';
}

export enum TypoTags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  Span = 'span',
}

export enum HeadingVariants {
  Hero = 'hero',
  Headline1 = 'headline1',
  Headline2 = 'headline2',
  Headline3 = 'headline3',
  Headline4 = 'headline4',
}

export enum TextVariants {
  Body1 = 'body1',
  Body2 = 'body2',
  Caption1 = 'caption1',
  Caption2 = 'caption2',
  Hairline1 = 'hairline1',
  Hairline2 = 'hairline2',
  Button1 = 'button1',
  Button2 = 'button2',
}

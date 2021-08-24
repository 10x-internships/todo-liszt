import { BaseStyles } from "../types";

interface HeadingTypes {
  hero: BaseStyles;
  headline1: BaseStyles;
  headline2: BaseStyles;
  headline3: BaseStyles;
  headline4: BaseStyles;
}

const headingStyles = {
  hero: {
    fontSize: "6rem",
    fontWeight: 700,
    lineHeight: "6rem",
    letterSpacing: "-0.02em",
  },
  headline1: {
    fontSize: "4rem",
    fontWeight: 700,
    lineHeight: "4rem",
    letterSpacing: "-0.02em",
  },
  headline2: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: "3.5rem",
    letterSpacing: "-0.02em",
  },
  headline3: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: "3rem",
    letterSpacing: "-0.01em",
  },
  headline4: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: "2.5rem",
    letterSpacing: "-0.01em",
  },
};

export default headingStyles;

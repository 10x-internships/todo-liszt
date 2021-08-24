import "@emotion/react";
import { ThemeType } from "../../../guest/styles/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

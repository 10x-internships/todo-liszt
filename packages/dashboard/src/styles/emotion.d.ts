import "@emotion/react";
import { ThemeType } from "@todo-liszt/common";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

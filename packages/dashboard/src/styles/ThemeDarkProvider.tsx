import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import { lightTheme, darkTheme } from "@todo-liszt/common";
import { selectIsDarkMode } from "../redux/selectors/ui";

const ThemeDarkProvider: React.FC = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeDarkProvider;

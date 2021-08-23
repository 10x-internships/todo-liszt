import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';

import { lightTheme, darkTheme, Switch } from '@todo-liszt/common';
import { selectIsDarkMode } from '@redux/selectors/ui';
import { toggleDarkMode } from '@redux/actions/ui';

const ThemeDarkProvider: React.FC = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
      {!router.pathname.startsWith('/app') && (
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
          <Switch checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())} />
        </div>
      )}
    </ThemeProvider>
  );
};

export default ThemeDarkProvider;

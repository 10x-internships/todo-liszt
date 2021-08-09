import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';

import { selectIsDarkMode } from '@redux/selectors/ui';
import { lightTheme, darkTheme } from 'styles';
import Switch from '@components/Switch';
import { toggleDarkMode } from '@redux/actions/ui';

const ThemeDarkProvider: React.FC = ({ children }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
      {!router.pathname.startsWith('/dashboard') && (
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
          <Switch checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())} />
        </div>
      )}
    </ThemeProvider>
  );
};

export default ThemeDarkProvider;

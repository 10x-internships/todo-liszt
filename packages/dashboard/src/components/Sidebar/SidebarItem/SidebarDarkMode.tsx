import { useDispatch, useSelector } from 'react-redux';

import { BrightnessUpLine, BrightnessUpFilled, Switch } from '@todo-liszt/common';
import { selectIsDarkMode } from '@redux/selectors/ui';
import { toggleThemeMode } from '@redux/actions/ui';

import * as Styled from './components';
import { SidebarItemProps } from './types';

const SidebarDarkMode = ({ isCollapsed }: SidebarItemProps) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const handleToggleTheme = () => dispatch(toggleThemeMode());

  return (
    <Styled.SidebarItem isCollapsed={isCollapsed} title="Toggle Dark Mode">
      <Styled.SidebarSwitch isCollapsed={isCollapsed}>
        <Styled.SidebarIcon onClick={handleToggleTheme}>
          {isDarkMode ? <BrightnessUpFilled /> : <BrightnessUpLine />}
        </Styled.SidebarIcon>

        {!isCollapsed && <Switch checked={isDarkMode} onChange={handleToggleTheme} />}
      </Styled.SidebarSwitch>
    </Styled.SidebarItem>
  );
};

export default SidebarDarkMode;

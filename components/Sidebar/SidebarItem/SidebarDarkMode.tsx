import { useState } from 'react';

import * as Styled from './components';
import { SidebarItemProps } from './types';
import { BrightnessUpLine, BrightnessUpFilled } from '@components/Icons';
import Switch from '@components/Switch';

const SidebarDarkMode = ({ isCollapsed }: SidebarItemProps) => {
  const [isSwitch, setIsSwitch] = useState(false);

  const handleSwitch = () => setIsSwitch(!isSwitch);

  return (
    <Styled.SidebarItem isCollapsed={isCollapsed}>
      <Styled.SidebarSwitch isCollapsed={isCollapsed}>
        <Styled.SidebarIcon onClick={handleSwitch}>
          {isSwitch ? <BrightnessUpFilled /> : <BrightnessUpLine />}
        </Styled.SidebarIcon>

        {!isCollapsed && <Switch checked={isSwitch} onChange={handleSwitch} />}
      </Styled.SidebarSwitch>
    </Styled.SidebarItem>
  );
};

export default SidebarDarkMode;

import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { colors } from '@styles/theme';
import SidebarList from './SidebarList';
import { SidebarDarkMode, SidebarLink, SidebarAbout } from './SidebarItem';
import sidebarData from './sidebarData';

import QuestionCircle from '@components/Icons/QuestionCircle';

interface SidebarProps {
  isCollapsed: boolean;
}

const SidebarNav = styled.nav<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: inherit;
  height: 100vh;
  background: ${colors.primary['01']};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const router = useRouter();

  return (
    <SidebarNav isCollapsed={isCollapsed}>
      {/* Side Nav Top */}
      <SidebarList>
        {sidebarData.map((sidebarItem) => (
          <SidebarLink
            key={sidebarItem.id}
            href={sidebarItem.path}
            icon={sidebarItem.icon}
            isCollapsed={isCollapsed}
            isActive={router.pathname.startsWith(sidebarItem.path)}
          >
            {sidebarItem.name}
          </SidebarLink>
        ))}
      </SidebarList>

      {/* Side Nav Bottom */}
      <SidebarList>
        <SidebarDarkMode isCollapsed={isCollapsed} />
        <SidebarAbout isCollapsed={isCollapsed} />
      </SidebarList>
    </SidebarNav>
  );
};

export default Sidebar;

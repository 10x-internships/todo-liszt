import styled from '@emotion/styled';

import { colors } from '@styles/theme';
import SidebarList from './SidebarList';
import { SidebarDarkMode, SidebarLink } from './SidebarItem';
import sidebarData from './sidebarData';

import QuestionCircle from '@components/Icons/QuestionCircle';

interface SidebarProps {
  isCollapsed: boolean;
}

const SidebarWrapper = styled.aside<SidebarProps>`
  width: ${({ isCollapsed }) => (isCollapsed ? '4rem' : '12.5rem')};
  background: ${colors.primary['01']};
  transition: width 0.25s linear;
`;

const SidebarNav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <SidebarWrapper isCollapsed={isCollapsed}>
      <SidebarNav>
        {/* Side Nav Top */}
        <SidebarList>
          {sidebarData.map((sidebarItem) => (
            <SidebarLink
              key={sidebarItem.id}
              href={sidebarItem.path}
              icon={sidebarItem.icon}
              isCollapsed={isCollapsed}
            >
              {sidebarItem.name}
            </SidebarLink>
          ))}
        </SidebarList>

        {/* Side Nav Bottom */}
        <SidebarList>
          <SidebarDarkMode isCollapsed={isCollapsed} />
          <SidebarLink href="/" icon={<QuestionCircle />} isCollapsed={isCollapsed}>
            About
          </SidebarLink>
        </SidebarList>
      </SidebarNav>
    </SidebarWrapper>
  );
};

export default Sidebar;

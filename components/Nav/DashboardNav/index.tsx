import * as Styled from './components';

import { Burger, Logo } from '@components/Icons';
import NavUser from './NavUser';

interface DashboardNav {
  onSidebarCollapsed: () => void;
}

const DashboardNav = ({ onSidebarCollapsed }: DashboardNav) => {
  return (
    <Styled.Header>
      <Styled.NavToggle onClick={onSidebarCollapsed}>
        <Burger />
      </Styled.NavToggle>

      <Styled.NavLogo>
        <Logo />
      </Styled.NavLogo>

      <NavUser avatarSrc="/assets/images/krillin.jpg" avatarAlt="Hello" username="Krillin" />
    </Styled.Header>
  );
};

export default DashboardNav;

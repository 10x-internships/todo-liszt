import * as Styled from "./components";

import { Burger, Logo } from "@todo-liszt/common";
import NavUser from "./NavUser";

interface NavbarProps {
  isSidebarCollapsed: boolean;
  onSidebarCollapsed: () => void;
}

const Navbar = ({ isSidebarCollapsed, onSidebarCollapsed }: NavbarProps) => {
  return (
    <Styled.Header isSidebarCollapsed={isSidebarCollapsed}>
      <Styled.NavToggle onClick={onSidebarCollapsed}>
        <Burger />
      </Styled.NavToggle>

      <Styled.NavLogo>
        <Logo />
      </Styled.NavLogo>

      <NavUser />
    </Styled.Header>
  );
};

export default Navbar;

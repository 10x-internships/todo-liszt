import styled from "@emotion/styled";
import { colors } from "@todo-liszt/common";

export const Header = styled.header<{ isSidebarCollapsed: boolean }>`
  position: fixed;
  width: calc(
    100% -
      ${({ isSidebarCollapsed }) => (isSidebarCollapsed ? "4rem" : "12.5rem")}
  );
  height: 4rem;
  padding: 0 2rem;
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.neutrals["06"]};
  transition: var(--transition);
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  & svg {
    display: block;
  }
`;

// export const NavWrapper = styled.nav`
//   position: fixed;
//   top: 0;
//   right: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: inherit;
//   width: inherit;
// `;

export const NavToggle = styled.div`
  cursor: pointer;
`;

export const NavLogo = styled.div`
  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

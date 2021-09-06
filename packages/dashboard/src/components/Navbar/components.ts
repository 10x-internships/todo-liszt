import styled from "@emotion/styled";
import { colors, Text } from "@todo-liszt/common";

export const Header = styled.header<{ isSidebarCollapsed: boolean }>`
  position: fixed;
  width: ${({ isSidebarCollapsed }) =>
    `calc(100% - ${isSidebarCollapsed ? "4rem" : "12.5rem"})`};
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

export const NavToggle = styled.div`
  cursor: pointer;
`;

export const NavLogo = styled.div`
  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const NavUserWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${Text} {
    margin-left: 1rem;
  }
`;

import styled from '@emotion/styled';

import { breakpoints, colors } from '@todo-liszt/common';

export const Header = styled.header`
  height: 5rem;
  background: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid ${colors.neutrals['06']};
  transition: var(--transition);

  & svg {
    display: block;
  }
`;

export const Nav = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavToggle = styled.div`
  cursor: pointer;

  & svg {
    color: ${colors.neutrals['04']};
  }

  @media (min-width: ${breakpoints.tabletLandscape}) {
    display: none;
  }
`;

export const NavAuth = styled.div`
  display: none;

  & a:first-of-type {
    margin-right: 1rem;
  }

  @media (min-width: ${breakpoints.tabletLandscape}) {
    display: block;
  }
`;

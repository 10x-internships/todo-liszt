import styled from '@emotion/styled';
import { colors } from '@styles/theme';

export const Header = styled.header`
  height: 4rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.neutrals['06']};

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

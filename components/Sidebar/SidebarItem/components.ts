import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Text } from '@components/Typography';
import { StyledSwitch } from '@components/Switch';
import { colors } from '@styles/theme';
import { SidebarItemProps } from './types';

const itemContentStyles = (isCollapsed: boolean = false) => css`
  width: 100%;
  padding: ${isCollapsed ? '0.5rem' : '0.375rem'};
  border-radius: ${isCollapsed ? '50%' : '4px'};
  display: flex;
  align-items: center;
  transition: background 0.25s linear, border-radius 0.25s linear;
`;

export const SidebarItem = styled.li<Omit<SidebarItemProps, 'href'>>`
  height: 64px;
  padding: 0 ${({ isCollapsed }) => (isCollapsed ? '0.75rem' : '1rem')};
  color: ${colors.neutrals['08']};
  display: flex;
  align-items: center;

  & a {
    ${({ isCollapsed }) => itemContentStyles(isCollapsed)}

    ${({ isActive }) =>
      isActive &&
      css`
        background: ${colors.neutrals['08']};
        color: ${colors.primary['01']};
      `}

    &:hover {
      background: ${({ isActive }) => (isActive ? colors.neutrals['08'] : '#2955bf')};
    }
  }

  & ${Text} {
    margin-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SidebarIcon = styled.div`
  flex-shrink: 0;
  cursor: pointer;

  & svg {
    display: block;
  }
`;

export const SidebarSwitch = styled.div<Omit<SidebarItemProps, 'href'>>`
  ${({ isCollapsed }) => itemContentStyles(isCollapsed)}

  & ${StyledSwitch} {
    margin-left: 1rem;
  }

  &:hover {
    ${({ isCollapsed }) => isCollapsed && `background: #2955bf;`};
  }
`;

export const SidebarAbout = styled.div<Omit<SidebarItemProps, 'href'>>`
  ${({ isCollapsed }) => itemContentStyles(isCollapsed)}
  cursor: pointer;

  &:hover {
    background: #2955bf;
  }
`;

import { NavLink } from 'react-router-dom';
import { Text, TextVariants, TypoTags } from '@todo-liszt/common';

import * as Styled from './components';
import { SidebarItemProps } from './types';

const SidebarLink = ({ href, icon, children, isCollapsed, isActive, title }: SidebarItemProps) => {
  return (
    <Styled.SidebarItem
      isCollapsed={isCollapsed}
      isActive={isActive}
      title={isCollapsed ? title : ''}
    >
      {href && (
        <NavLink to={href} activeClassName="active">
          <Styled.SidebarIcon>{icon}</Styled.SidebarIcon>
          {!isCollapsed && (
            <Text as={TypoTags.Span} variant={TextVariants.Button2}>
              {children}
            </Text>
          )}
        </NavLink>
      )}
    </Styled.SidebarItem>
  );
};

export default SidebarLink;

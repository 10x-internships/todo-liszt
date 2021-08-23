import Link from 'next/link';

import * as Styled from './components';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import { SidebarItemProps } from './types';

const SidebarLink = ({ href, icon, children, isCollapsed, isActive, title }: SidebarItemProps) => {
  return (
    <Styled.SidebarItem
      isCollapsed={isCollapsed}
      isActive={isActive}
      title={isCollapsed ? title : ''}
    >
      {href && (
        <Link href={href}>
          <a>
            <Styled.SidebarIcon>{icon}</Styled.SidebarIcon>
            {!isCollapsed && (
              <Text as={TypoTags.Span} variant={TextVariants.Button2}>
                {children}
              </Text>
            )}
          </a>
        </Link>
      )}
    </Styled.SidebarItem>
  );
};

export default SidebarLink;

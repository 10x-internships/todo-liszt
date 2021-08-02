import { forwardRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Text, TextVariants, TypoTags } from '../Typography';

interface SubNavItemProps extends React.ComponentPropsWithRef<'a'> {
  isActive?: boolean;
  isDeactive?: boolean;
  children?: React.ReactNode;
}

const StyledSubNavItem = styled.a<SubNavItemProps>`
  height: 1.75rem;
  padding: 0 0.75rem;
  display: inline-flex;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.subNavItem.textColor};
    transition: var(--transition);

    &:hover {
      color: ${theme.subNavItem.textHover};
    }
  `}

  ${({ theme, isActive }) =>
    isActive &&
    css`
      color: ${theme.subNavItem.activeText};
      background: ${theme.subNavItem.activeBackground};
      border-radius: 6.25rem;
      transition: var(--transition);

      &:hover {
        color: ${theme.subNavItem.activeText};
      }
    `}

  ${({ theme, isDeactive }) =>
    isDeactive &&
    css`
      color: ${theme.subNavItem.deactiveColor};
      pointer-events: none;
    `}
`;

const SubNavItem = forwardRef<HTMLAnchorElement, SubNavItemProps>(
  ({ children, ...others }, ref) => {
    return (
      <StyledSubNavItem ref={ref} {...others}>
        <Text as={TypoTags.Span} variant={TextVariants.Button2}>
          {children}
        </Text>
      </StyledSubNavItem>
    );
  }
);

SubNavItem.displayName = 'SubNavItem';

export default SubNavItem;

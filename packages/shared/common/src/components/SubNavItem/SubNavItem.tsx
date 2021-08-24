import { forwardRef } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Text, TextVariants, TypoTags } from "../Typography";

type SubNavItemAttributes = React.ComponentPropsWithRef<"a"> &
  React.ComponentPropsWithoutRef<"button">;

interface SubNavItemProps extends SubNavItemAttributes {
  isActive?: boolean;
  isDeactive?: boolean;
  children?: React.ReactNode;
  isTab?: boolean;
}

const StyledSubNavItem = styled.a<SubNavItemProps>`
  height: 1.75rem;
  padding: 0 0.75rem;
  border: 0;
  outline: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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
      &,&[disabled]
      color: ${theme.subNavItem.deactiveColor};
      pointer-events: none;
    `}
`;

const SubNavItem = forwardRef<HTMLAnchorElement, SubNavItemProps>(
  ({ children, isTab, ...others }, ref) => {
    if (isTab) {
      return (
        <StyledSubNavItem as="button" {...others}>
          <Text as={TypoTags.Span} variant={TextVariants.Button2}>
            {children}
          </Text>
        </StyledSubNavItem>
      );
    }

    return (
      <StyledSubNavItem ref={ref} {...others}>
        <Text as={TypoTags.Span} variant={TextVariants.Button2}>
          {children}
        </Text>
      </StyledSubNavItem>
    );
  }
);

SubNavItem.displayName = "SubNavItem";

export default SubNavItem;

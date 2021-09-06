import styled from "@emotion/styled";

import { colors, Text } from "@todo-liszt/common";

import { DropdownItemProps } from "../types";

export const StyledDropdownItem = styled.li<Omit<DropdownItemProps, "option">>`
  padding: 0.5rem;

  border-radius: 0.5rem;
  cursor: pointer;
  transition: var(--transition);

  &,
  & a {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & svg {
    display: block;
    margin-right: 0.5rem;
    color: ${colors.neutrals["04"]};
  }

  &:hover {
    background: ${({ theme }) => theme.dropdown.hoverBackground};
  }

  & ${Text} {
    color: ${({ isAllItem }) => (isAllItem ? colors.primary["01"] : "inherit")};
  }
`;

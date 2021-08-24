import { forwardRef } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors } from "../../../styles";
import { OptionType } from "../types";
import { Text, TextVariants, TypoTags } from "../../Typography";
import { CircleLine } from "../../Icons";

interface DropdownItemProps extends React.ComponentPropsWithoutRef<"li"> {
  isAllItem?: boolean;
  option: OptionType;
  icon?: React.ReactNode;
}

const StyledDropdownItem = styled.li<Omit<DropdownItemProps, "option">>`
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

const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ option, ...others }, ref) => {
    const { name, value, href, icon, colorFill } = option;

    if (href) {
      return (
        <StyledDropdownItem {...others}>
          <Link to={href}>
            {icon}
            <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
              {name}
            </Text>
          </Link>
        </StyledDropdownItem>
      );
    }

    return (
      <StyledDropdownItem isAllItem={value === ""} {...others}>
        <CircleLine circleFill={colorFill} />
        <Text
          as={TypoTags.Span}
          variant={TextVariants.Caption1}
          isBold={value === ""}
        >
          {name}
        </Text>
      </StyledDropdownItem>
    );
  }
);

export default DropdownItem;

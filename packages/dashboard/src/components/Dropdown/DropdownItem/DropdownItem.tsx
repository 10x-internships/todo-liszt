import { forwardRef } from "react";
import { Link } from "react-router-dom";

import { Text, TextVariants, TypoTags } from "@todo-liszt/common";

import { DropdownItemProps } from "../types";
import { StyledDropdownItem } from "./styledComponents";

const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ option, ...others }, ref) => {
    const { name, value, href, icon } = option;

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
        {icon}
        {/* <CircleLine circleFill={colorFill} /> */}
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

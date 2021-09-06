import { useEffect, forwardRef } from "react";

import { DropdownListProps } from "../types";

import { StyledDropdownList } from "./styledComponents";

const DropdownList = forwardRef<HTMLUListElement, DropdownListProps>(
  ({ children, onCloseDropdown, ...others }, ref) => {
    useEffect(() => {
      document.addEventListener("click", onCloseDropdown);

      return () => {
        document.removeEventListener("click", onCloseDropdown);
      };
    }, [onCloseDropdown]);

    return (
      <StyledDropdownList ref={ref} {...others}>
        {children}
      </StyledDropdownList>
    );
  }
);

export default DropdownList;

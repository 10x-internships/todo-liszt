import styled from "@emotion/styled";
import { DropdownWrapper } from "@todo-liszt/common";

export const Wrapper = styled.div`
  & ${DropdownWrapper} + ${DropdownWrapper} {
    margin-top: 2rem;
  }
`;

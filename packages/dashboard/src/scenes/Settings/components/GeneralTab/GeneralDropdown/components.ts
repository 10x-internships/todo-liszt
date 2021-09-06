import styled from "@emotion/styled";
import { DropdownWrapper } from "@components/Dropdown";

export const Wrapper = styled.div`
  & ${DropdownWrapper} + ${DropdownWrapper} {
    margin-top: 2rem;
  }
`;

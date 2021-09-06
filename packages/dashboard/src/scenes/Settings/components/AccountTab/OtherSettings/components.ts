import styled from "@emotion/styled";
import { Text, colors } from "@todo-liszt/common";

export const Wrapper = styled.div`
  & ${Text}:first-of-type {
    color: ${colors.neutrals["05"]};
  }

  & ${Text}:last-of-type {
    margin: 0.75rem 0;
    color: ${colors.primary["03"]};
  }
`;

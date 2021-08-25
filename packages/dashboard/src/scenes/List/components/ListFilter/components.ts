import styled from "@emotion/styled";
import { Text } from "@todo-liszt/common";

export const ListFilter = styled.div`
  max-width: 15rem;
  margin-top: 1rem;

  & > ${Text} {
    display: inline-block;
    margin-bottom: 0.75rem;
  }
`;

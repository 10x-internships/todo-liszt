import styled from "@emotion/styled";
import { Text, colors } from "@todo-liszt/common";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const UploadPhoto = styled.div`
  padding-left: 6.25rem;

  & ${Text} {
    margin-top: 0.5rem;
    color: ${colors.neutrals["04"]};
  }
`;

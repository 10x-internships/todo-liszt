import styled from '@emotion/styled';

import { StyledButton } from '@components/Button';

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListHeaderContent = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

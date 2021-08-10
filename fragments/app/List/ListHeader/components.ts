import styled from '@emotion/styled';

import { StyledButton } from '@components/Button';

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListSearchForm = styled.form`
  display: flex;

  & ${StyledButton} {
    margin-left: 1rem;
  }
`;

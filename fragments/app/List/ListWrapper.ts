import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ListWrapper = styled.div<{ isEmpty?: boolean }>`
  width: 100%;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  flex: 1;
  overflow: hidden;

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export default ListWrapper;

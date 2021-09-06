import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ListListingWrapper = styled.div<{ isEmpty?: boolean }>`
  width: 100%;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  flex: 1;
  overflow: hidden;
  transition: var(--transition);

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

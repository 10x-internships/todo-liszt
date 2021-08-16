import styled from '@emotion/styled';

import { colors } from '@styles/theme';

export const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  transition: var(--transition);
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;

  th,
  td {
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.borderColor};
    transition: var(--transition);
  }
`;

export const Thead = styled.thead`
  th {
    text-align: left;
    color: ${colors.primary['02']};
  }
`;

export const Tbody = styled.tbody`
  td {
    height: 7rem;
    vertical-align: top;
  }
`;

export const Td = styled.td<{ isToday?: boolean; isDayInMonth?: boolean }>`
  ${({ isDayInMonth }) => !isDayInMonth && `color: ${colors.neutrals['05']}`}
  ${({ isToday }) => isToday && `color: ${colors.primary['01']}`}
`;

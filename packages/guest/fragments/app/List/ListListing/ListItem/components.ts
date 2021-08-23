import styled from '@emotion/styled';
import { colors } from '@styles/theme';

export const ListItem = styled.li`
  padding: 1.125rem 1.5rem;
  background: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: flex-start;
  transition: var(--transition);
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  }

  &:hover {
    background: ${({ theme }) => theme.listItem.hoverBackground};
  }
`;

export const SubTasks = styled.div`
  margin-left: auto;
  width: 1.5rem;
  height: 1.5rem;

  color: ${colors.neutrals['02']};
  background: ${colors.secondary['02']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

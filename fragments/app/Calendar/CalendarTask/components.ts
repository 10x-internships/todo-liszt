import styled from '@emotion/styled';
import { colors } from '@styles/theme';

export const CalendarTask = styled.div<{ taskColor?: string }>`
  height: 1.5rem;
  padding: 0 0.5rem;
  color: ${colors.neutrals['09']};
  background: ${({ taskColor }) => taskColor || colors.primary['01']};
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  & + & {
    margin-top: 0.75rem;
  }
`;

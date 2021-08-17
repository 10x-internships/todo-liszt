import styled from '@emotion/styled';
import { colors } from '@styles/theme';

export const CalendarTask = styled.div<{ color?: string }>`
  height: 1.5rem;
  padding: 0 0.5rem;
  color: ${colors.neutrals['09']};
  background: ${colors.primary['01']};
  border-radius: 4px;

  & + & {
    margin-top: 0.75rem;
  }
`;

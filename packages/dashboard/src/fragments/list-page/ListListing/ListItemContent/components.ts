import styled from "@emotion/styled";
import { Text as ScheduleText, colors } from "@todo-liszt/common";

export const ListItemContent = styled.div`
  margin-left: 1.25rem;
`;

export const ItemColor = styled.div<{ color: string }>`
  width: 1.5rem;
  height: 1.5rem;
  background: ${({ color }) => color || "#c4c4c4"};
  border-radius: 50%;
`;

export const ItemTextWrapper = styled.div`
  display: flex;
  align-items: center;

  & ${ItemColor} {
    margin-right: 0.75rem;
  }
`;

export const ItemSchedule = styled.div`
  margin-top: 0.5rem;

  & ${ScheduleText} {
    color: ${colors.secondary["01"]};
  }
`;

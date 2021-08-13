import styled from '@emotion/styled';
import { Heading, Text } from '@components/Typography';
import { colors } from '@styles/theme';
import { InputWrapper } from '@components/Input';

export const SubTasksWrapper = styled.div`
  width: 50%;
`;

export const SubTasksContent = styled.div`
  margin-top: 3.25rem;
`;

export const SubTasksList = styled.ul`
  margin-bottom: 2rem;
`;

// Sub task item
export const SubTaskItem = styled.li`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.subTaskItem.borderColor};
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  transition: var(--transition);
`;

export const SubTaskItemContent = styled.div`
  margin-left: 1.25rem;

  & ${Text} {
    display: block;
  }

  & ${Text}:last-child {
    margin-top: 0.5rem;
    color: ${colors.neutrals['04']};
  }
`;

// Sub task delete button
export const DeleteButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  margin-left: auto;
  cursor: pointer;

  & svg {
    display: block;
    color: ${colors.neutrals['04']};
    transition: var(--transition);
  }

  &:hover svg {
    color: ${colors.primary['03']};
  }
`;

// Add sub task
export const AddSubTaskForm = styled.form`
  & ${Heading} {
    margin-bottom: 2rem;
  }

  & ${InputWrapper} + ${InputWrapper} {
    margin-top: 2rem;
  }
`;

export const AddSubTaskAction = styled.div`
  margin-top: 2rem;
  text-align: right;

  & button + button {
    margin-left: 1rem;
  }
`;

import styled from '@emotion/styled';
import { InputWrapper } from '@components/Input';

export const ListForm = styled.div`
  padding: 2rem 1.5rem;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  transition: var(--transition);
  display: flex;
  gap: 1.875rem;

  & ${InputWrapper} span {
    display: block;
  }
`;

import styled from '@emotion/styled';
import { InputWrapper } from '@components/Input';

export const ListForm = styled.div`
  padding: 2rem 1.5rem;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  display: flex;
  gap: 1.875rem;

  & ${InputWrapper} span {
    display: block;
  }
`;

export const FormInformation = styled.div`
  width: 50%;
`;

export const FormInputs = styled.div`
  margin-top: 1.5rem;

  & > ${InputWrapper} + ${InputWrapper} {
    margin-top: 2rem;
  }
`;

export const FormDate = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.875rem;

  & > * {
    width: 50%;
  }
`;

export const FormDropdown = styled.div`
  width: calc(50% - 1rem);
  margin-top: 2rem;
`;

export const FormSubTask = styled.div`
  width: 50%;
`;

export const FormSubTaskWrapper = styled.div`
  margin-top: 3.25rem;
`;

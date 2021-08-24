import styled from "@emotion/styled";
import { InputWrapper } from "@todo-liszt/common";

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

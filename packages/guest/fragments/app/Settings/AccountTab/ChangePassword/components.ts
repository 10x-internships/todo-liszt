import styled from '@emotion/styled';
import { InputWrapper } from '@components/Input';

export const FormPassword = styled.form`
  & ${InputWrapper} + ${InputWrapper} {
    margin-top: 2.25rem;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 2rem;
  text-align: right;

  & button + button {
    margin-left: 1rem;
  }
`;

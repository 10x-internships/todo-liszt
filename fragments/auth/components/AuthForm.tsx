import styled from '@emotion/styled';
import { InputWrapper } from '@components/Input';

const AuthForm = styled.form`
  max-width: 22.5rem;
  margin: 0 auto;

  & ${InputWrapper}:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default AuthForm;

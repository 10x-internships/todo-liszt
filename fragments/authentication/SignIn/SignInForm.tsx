import styled from '@emotion/styled';

import { Input, InputWrapper } from '@components/Input';
import { Button } from '@components/Button';

const StyledSignInForm = styled.form`
  & ${InputWrapper}:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const SignInForm = () => {
  return (
    <StyledSignInForm autoComplete="off">
      <Input label="email" id="email" type="email" placeholder="Enter your email" required />
      <Input
        label="password"
        id="password"
        type="password"
        placeholder="Enter your password"
        required
      />
      <Button type="submit" css={{ width: '100%' }}>
        Sign in
      </Button>
    </StyledSignInForm>
  );
};

export default SignInForm;

import styled from '@emotion/styled';
import { Text } from '@todo-liszt/common';

export const Wrapper = styled.div`
  & a {
    width: 100%;
    margin-top: 1rem;

    & ${Text} {
      display: inline-block;
      width: 100%;
      color: ${({ theme }) => theme.authentication.textColor};
    }

    &:hover ${Text} {
      text-decoration: underline;
    }
  }
`;

export const ForgotPasswordLink = styled.a`
  width: 100%;
  margin-top: 1rem;

  & ${Text} {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.authentication.textColor};
  }

  &:hover ${Text} {
    text-decoration: underline;
  }
`;

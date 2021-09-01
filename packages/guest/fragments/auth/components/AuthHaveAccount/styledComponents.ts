import styled from '@emotion/styled';

import { Text, colors } from '@todo-liszt/common';

export const Wrapper = styled.div`
  margin-top: 4rem;

  & ${Text} {
    color: ${({ theme }) => theme.authentication.textColor};
  }

  & a {
    color: ${colors.secondary['01']};

    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from '@emotion/styled';
import { Text, colors } from '@todo-liszt/common';

export const ListEmpty = styled.div`
  text-align: center;

  & ${Text} {
    margin-top: 1.5rem;
    color: ${colors.primary['02']};
  }

  & img {
    margin: 0 auto;
  }
`;

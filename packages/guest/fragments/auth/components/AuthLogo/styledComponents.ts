import styled from '@emotion/styled';

import { colors, Text } from '@todo-liszt/common';

export const Wrapper = styled.div`
  text-align: center;

  & ${Text} {
    color: ${colors.primary['01']};
  }

  & svg {
    display: block;
    width: 5rem;
    height: 5rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0.75rem;
  }
`;

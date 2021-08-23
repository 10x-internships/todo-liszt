import styled from '@emotion/styled';
import { Text } from '@components/Typography';
import { colors } from '@styles/theme';

export const ListEmpty = styled.div`
  text-align: center;

  & ${Text} {
    margin-top: 1.5rem;
    color: ${colors.primary['02']};
  }
`;

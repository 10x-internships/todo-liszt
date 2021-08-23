import styled from '@emotion/styled';
import { Text } from '@components/Typography';
import { colors } from '@styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const UploadPhoto = styled.div`
  padding-left: 6.25rem;

  & ${Text} {
    margin-top: 0.5rem;
    color: ${colors.neutrals['04']};
  }
`;

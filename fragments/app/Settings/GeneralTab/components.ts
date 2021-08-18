import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-radius: 4px;
  }
`;

export const GeneralImage = styled(Image)`
  border-radius: 4px;
`;

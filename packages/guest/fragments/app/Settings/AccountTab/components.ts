import css from '@emotion/css';
import styled from '@emotion/styled';

const baseStyles = css`
  display: flex;
  gap: 1.875rem;

  & > * {
    width: 50%;
  }
`;

export const AccountTop = styled.div`
  ${baseStyles}
`;

export const AccountBottom = styled.div`
  ${baseStyles}
  margin-top: 2rem;
`;

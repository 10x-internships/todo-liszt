import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & h2 {
    margin-bottom: 1rem;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 1.5rem;
  transition: var(--transition);
`;

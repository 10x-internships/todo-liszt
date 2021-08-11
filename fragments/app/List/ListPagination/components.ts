import styled from '@emotion/styled';

export const PaginationList = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & li {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;

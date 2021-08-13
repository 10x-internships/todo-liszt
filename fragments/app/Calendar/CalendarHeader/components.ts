import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonsWrapper = styled.div`
  display: flex;

  & button + button {
    margin-left: 0.5rem;
  }
`;

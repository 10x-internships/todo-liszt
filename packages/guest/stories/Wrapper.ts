import styled from '@emotion/styled';

const Wrapper = styled.div`
  & > div + div {
    margin-top: 0.5rem;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 1rem;
  }
`;

export default Wrapper;

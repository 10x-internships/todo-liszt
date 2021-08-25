import styled from "@emotion/styled";

export const SceneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SceneHeaderContent = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

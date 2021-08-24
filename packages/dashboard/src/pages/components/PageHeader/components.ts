import styled from "@emotion/styled";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageHeaderContent = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

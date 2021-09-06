import styled from "@emotion/styled";

export const DropdownWrapper = styled.div``;

export const DropdownSelectBox = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.75rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);
`;

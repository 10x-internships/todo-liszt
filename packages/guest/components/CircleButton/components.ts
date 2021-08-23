import styled from '@emotion/styled';

export const CircleButton = styled.button`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.button.textColor};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: ${({ theme }) => theme.button.textHover};
    background: ${({ theme }) => theme.button.backgroundColor};
    border-color: ${({ theme }) => theme.button.backgroundColor};
  }

  &[disabled] {
    color: ${({ theme }) => theme.button.textHover};
    background: ${({ theme }) => theme.button.backgroundColor};
    border-color: ${({ theme }) => theme.button.backgroundColor};
    opacity: 0.5;
    pointer-events: none;
  }
`;

import styled from '@emotion/styled';
import { colors } from '@styles/theme';

export const PaginationList = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PaginationItem = styled.li<{ isActive?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    width: 100%;
    height: 100%;
    ${({ isActive }) => isActive && `color: ${colors.primary['01']};`}
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    transition: var(--transition);
  }

  & button:hover {
    color: ${colors.primary['01']};
  }

  & button:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

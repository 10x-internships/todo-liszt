import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

export const Search = styled.div``;

export const SearchLabel = styled.label`
  display: inline-block;
  margin-bottom: 1.063rem;
  color: ${colors.neutrals['05']};
`;

export const SearchGroup = styled.div`
  height: 3rem;
  padding-right: 0.5rem;
  padding-left: 1rem;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-family: var(--font-secondary);
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.textColor};
  background: transparent;
  border: 0;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 2rem;
  height: 2rem;
  margin-left: 1.125rem;
  background: ${colors.primary['01']};
  border: 0;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    display: block;
    width: 1rem;
    height: 1rem;
    color: ${colors.neutrals['08']};
  }
`;

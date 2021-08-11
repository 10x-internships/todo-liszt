import { useEffect } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../styles/theme';

interface DropdownListProps extends React.ComponentPropsWithRef<'ul'> {
  children?: React.ReactNode;
  onCloseDropdown: (e: Event) => void;
}

const StyledDropdownList = styled.ul<Omit<DropdownListProps, 'onCloseDropdown'>>`
  position: absolute;
  max-height: 16.5rem;
  padding: 0.5rem;
  /* margin-top: 0.75rem; */
  background: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.75rem;
  box-shadow: 0 4rem 4rem -3rem rgba(31, 47, 70, 0.12);
  overflow-y: auto;
  z-index: 10;

  & li + li {
    margin-top: 0.625rem;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 1rem 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.neutrals['05']};
    border-radius: 10rem;
  }
`;

const DropdownList = ({ children, onCloseDropdown, ...others }: DropdownListProps) => {
  useEffect(() => {
    document.addEventListener('click', onCloseDropdown);

    return () => {
      document.removeEventListener('click', onCloseDropdown);
    };
  }, []);

  return <StyledDropdownList {...others}>{children}</StyledDropdownList>;
};

export default DropdownList;

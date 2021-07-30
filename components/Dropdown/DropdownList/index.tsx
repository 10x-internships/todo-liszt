import styled from '@emotion/styled';

interface DropdownListProps {
  isOpen?: boolean;
  children?: React.ReactNode;
}

const StyledDropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 100%;
  max-height: 16rem;
  padding: 0.5rem;
  margin-top: 0.75rem;
  background: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.75rem;
  box-shadow: 0 4rem 4rem -3rem rgba(31, 47, 70, 0.12);
  overflow-y: auto;

  & li + li {
    margin-top: 0.625rem;
  }
`;

const DropdownList = ({ isOpen, children }: DropdownListProps) => {
  return <StyledDropdownList isOpen={isOpen}>{children}</StyledDropdownList>;
};

export default DropdownList;

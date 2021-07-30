import { useState } from 'react';
import styled from '@emotion/styled';

import { Text, TextVariants, TypoTags } from '../Typography';
import { ArrowDown, ArrowUp } from '../Icons';

import { DropdownProps, OptionType } from './types';
import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';

const StyledDropdown = styled.div`
  position: relative;
`;

const DropdownSelect = styled.div`
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
`;

const Dropdown = ({ options, selected, setSelected }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenDropdown = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <StyledDropdown>
      <DropdownSelect onClick={handleOpenDropdown}>
        <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
          {selected}
        </Text>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </DropdownSelect>

      <DropdownList isOpen={isOpen}>
        {options.map((option: OptionType) => (
          <DropdownItem
            key={option.id}
            option={option}
            onClick={() => {
              setSelected(option.name);
              setIsOpen(false);
            }}
          />
        ))}
      </DropdownList>
    </StyledDropdown>
  );
};

export default Dropdown;

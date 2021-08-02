import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

import { Text, TextVariants, TypoTags } from '../Typography';
import { ArrowDown, ArrowUp } from '../Icons';
import Portal from '../Portal';

import { DropdownProps, OptionType } from './types';
import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';

const DropdownSelectBox = styled.div`
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
  const [position, setPosition] = useState({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();

      setPosition({ top: rect.top + 48 + window.scrollY, left: rect.left, width: rect.width });
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  const handleClickOutside = (e: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <DropdownSelectBox ref={dropdownRef} onClick={handleToggleDropdown}>
        <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
          {selected}
        </Text>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </DropdownSelectBox>

      {isOpen && (
        <Portal>
          <DropdownList style={position} onCloseDropdown={handleClickOutside}>
            {options.map((option: OptionType) => (
              <DropdownItem
                key={option.id}
                option={option}
                onClick={() => {
                  setSelected(option.name);
                }}
              />
            ))}
          </DropdownList>
        </Portal>
      )}
    </>
  );
};

export default Dropdown;

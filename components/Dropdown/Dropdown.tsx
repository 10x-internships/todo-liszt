import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

import { Text, TextVariants, TypoTags } from '../Typography';
import { ArrowDown, ArrowUp } from '../Icons';
import Portal from '../Portal';
import { InputLabel } from '@components/Input';

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
  transition: var(--transition);
`;

const Dropdown = ({
  options,
  selected,
  setSelected,
  placement: place = 'bottom',
  label,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      let top;

      if (place === 'bottom') {
        top = rect.top + rect.height + window.scrollY; // 48 -> height of the dropdown box
        setPosition({ top, left: rect.left, width: rect.width, marginTop: 12 });
      }

      if (place === 'top') {
        top = rect.top - 264 + window.scrollY; // 264 -> max-height of the DropdownList
        setPosition({ top, left: rect.left, width: rect.width, marginTop: -12 });
      }

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
      {label && <InputLabel label={label} />}

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

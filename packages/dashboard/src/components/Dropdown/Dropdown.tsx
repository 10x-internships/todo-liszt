import { useRef, useState } from 'react';

import { ArrowDown, ArrowUp } from '@todo-liszt/common';
import { Text, TextVariants, TypoTags, Portal, InputLabel } from '@todo-liszt/common';

import * as Styled from './styledComponents';
import DropdownList from './DropdownList';
import DropdownItem from './DropdownItem';
import { DropdownProps, OptionType } from './types';

const Dropdown = ({
  options,
  selected,
  setSelected,
  placement = 'bottom',
  label,
  onSelectedItem,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState({});

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      let top;

      if (placement === 'bottom') {
        top = rect.top + rect.height + window.scrollY;
        setPosition({ top, left: rect.left, width: rect.width, marginTop: 12 });
      }

      if (placement === 'top') {
        top = rect.top - 264 + window.scrollY; // 264 -> max-height of the DropdownList
        setPosition({
          top,
          left: rect.left,
          width: rect.width,
          marginTop: -12,
        });
      }

      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  const handleClickOutside = (e: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
      setPosition({});
    }
  };

  return (
    <Styled.DropdownWrapper>
      {label && <InputLabel label={label} />}

      <Styled.DropdownSelectBox ref={dropdownRef} onClick={handleToggleDropdown}>
        <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold>
          {selected}
        </Text>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </Styled.DropdownSelectBox>

      {isOpen && (
        <Portal>
          <DropdownList style={position} onCloseDropdown={handleClickOutside}>
            {children}
            {/* {!children &&
              options.map((option: OptionType) => (
                <DropdownItem
                  key={option.id}
                  option={option}
                  onClick={() => {
                    setSelected(option.name);
                  }}
                />
              ))} */}
          </DropdownList>
        </Portal>
      )}
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;

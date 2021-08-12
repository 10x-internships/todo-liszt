import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

import Avatar from '@components/Avatar';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import { DropdownList } from '@components/Dropdown';
import Portal from '@components/Portal';
import DropdownItem from '@components/Dropdown/DropdownItem';
import { Setting, Signout } from '@components/Icons';

interface NavUserProps {
  avatarSrc: string | StaticImageData;
  avatarAlt: string;
  username?: string;
}

const items = [
  {
    id: 1,
    name: 'Settings',
    href: '/app/settings',
    icon: <Setting />,
  },
  {
    id: 2,
    name: 'Sign out',
    href: '/app/signout',
    icon: <Signout />,
  },
];

const NavUser = ({ avatarSrc, avatarAlt, username }: NavUserProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [position, setPosition] = useState({});
  const navUserRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (navUserRef.current) {
      const rect = navUserRef.current.getBoundingClientRect();

      setPosition({ top: rect.top + rect.height + 5 + window.scrollY });
      setShowDropdown((prevIsOpen) => !prevIsOpen);
    }
  };

  return (
    <>
      <NavUserWrapper ref={navUserRef} onClick={handleToggleDropdown}>
        <Avatar src={avatarSrc as any} alt={avatarAlt} width={36} height={36} />
        <Text as={TypoTags.Span} variant={TextVariants.Button2}>
          {username}
        </Text>
      </NavUserWrapper>

      {showDropdown && (
        <Portal>
          <DropdownList
            onCloseDropdown={() => setShowDropdown(false)}
            style={{ ...position, right: 24, width: '16rem', margin: 0 }}
          >
            {items.map((item) => (
              <DropdownItem key={item.id} option={item} />
            ))}
          </DropdownList>
        </Portal>
      )}
    </>
  );
};

const NavUserWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  ${Text} {
    margin-left: 1rem;
  }
`;

export default NavUser;

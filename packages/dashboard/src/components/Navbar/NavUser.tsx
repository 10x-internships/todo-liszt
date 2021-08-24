import { useState, useRef } from "react";
import styled from "@emotion/styled";

import { Text, TextVariants, TypoTags, Avatar } from "@todo-liszt/common";
import { DropdownList, DropdownItem, Portal } from "@todo-liszt/common";
import { Setting, Signout } from "@todo-liszt/common";

interface NavUserProps {
  avatarSrc: string;
  avatarAlt: string;
  username?: string;
}

const items = [
  {
    id: 1,
    name: "Settings",
    href: "/app/settings/krillin",
    icon: <Setting />,
  },
  {
    id: 2,
    name: "Sign out",
    href: "/app/signout",
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
        <Avatar src={avatarSrc} name={avatarAlt} />
        <Text as={TypoTags.Span} variant={TextVariants.Button2}>
          {username}
        </Text>
      </NavUserWrapper>

      {showDropdown && (
        <Portal>
          <DropdownList
            onCloseDropdown={() => setShowDropdown(false)}
            style={{ ...position, right: 24, width: "16rem", margin: 0 }}
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
  display: flex;
  align-items: center;
  cursor: pointer;

  ${Text} {
    margin-left: 1rem;
  }
`;

export default NavUser;

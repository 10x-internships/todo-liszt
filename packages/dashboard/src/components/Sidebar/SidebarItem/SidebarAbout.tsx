import { useState, useRef } from "react";

import { Document, InfoCircle, Lock, QuestionCircle } from "@todo-liszt/common";
import { Text, TextVariants, TypoTags } from "@todo-liszt/common";
import { DropdownList, DropdownItem, Portal } from "@todo-liszt/common";

import * as Styled from "./components";
import { SidebarItemProps } from "./types";

const items = [
  {
    id: 1,
    name: "About",
    href: "/about",
    icon: <InfoCircle />,
  },
  {
    id: 2,
    name: "Privacy Policy",
    href: "/privacy",
    icon: <Lock />,
  },
  {
    id: 3,
    name: "Terms of Use",
    href: "/terms",
    icon: <Document />,
  },
];

const SidebarAbout = ({ isCollapsed, title }: SidebarItemProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [position, setPosition] = useState({});

  const aboutDropdownRef = useRef<HTMLLIElement>(null);

  const handleToggleDropdown = () => {
    if (aboutDropdownRef.current) {
      const rect = aboutDropdownRef.current.getBoundingClientRect();

      setPosition({ top: rect.top - 158 + window.scrollY, left: 19.5 });
      setShowDropdown((prevIsOpen) => !prevIsOpen);
    }
  };

  return (
    <>
      <Styled.SidebarItem
        ref={aboutDropdownRef}
        isCollapsed={isCollapsed}
        onClick={handleToggleDropdown}
        title={isCollapsed ? "About" : ""}
      >
        <Styled.SidebarAbout isCollapsed={isCollapsed}>
          <Styled.SidebarIcon>
            <QuestionCircle />
          </Styled.SidebarIcon>
          {!isCollapsed && (
            <Text as={TypoTags.Span} variant={TextVariants.Button2}>
              About
            </Text>
          )}
        </Styled.SidebarAbout>
      </Styled.SidebarItem>

      {showDropdown && (
        <Portal>
          <DropdownList
            onCloseDropdown={() => setShowDropdown(false)}
            style={{ ...position, margin: 0 }}
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

export default SidebarAbout;

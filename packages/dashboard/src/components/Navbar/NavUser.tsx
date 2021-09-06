import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Setting, Signout } from "@todo-liszt/common"; // icon
import {
  Text,
  TextVariants,
  TypoTags,
  Avatar,
  Portal,
} from "@todo-liszt/common";

import { selectUserData } from "@redux/selectors/auth";
import { signOut } from "@redux/actions/auth";

import { DropdownList, DropdownItem } from "../Dropdown";
import { NavUserWrapper } from "./components";

const NavUser = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

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

  const handleClickOutside = (e: Event) => {
    if (navUserRef.current && !navUserRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
      setPosition({});
    }
  };

  return (
    <>
      <NavUserWrapper ref={navUserRef} onClick={handleToggleDropdown}>
        <Avatar
          src={userData?.avatar || "/assets/images/avatar-placeholder.png"}
          name={userData?.name ? userData?.name : userData?.email}
        />
        <Text as={TypoTags.Span} variant={TextVariants.Button2}>
          {userData?.name ? userData?.name : userData?.email}
        </Text>
      </NavUserWrapper>

      {showDropdown && (
        <Portal>
          <DropdownList
            onCloseDropdown={handleClickOutside}
            style={{ ...position, right: 24, width: "16rem", margin: 0 }}
          >
            <DropdownItem
              option={{
                id: 1,
                name: "Settings",
                href: "/app/settings",
                icon: <Setting />,
              }}
            />
            <DropdownItem
              option={{
                id: 2,
                name: "Sign out",
                icon: <Signout />,
              }}
              onClick={() => dispatch(signOut())}
            />
          </DropdownList>
        </Portal>
      )}
    </>
  );
};

export default NavUser;

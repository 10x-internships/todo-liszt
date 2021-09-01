import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

import {
  Text,
  TextVariants,
  TypoTags,
  Avatar,
  DropdownList,
  DropdownItem,
  Portal,
} from "@todo-liszt/common";
import { Setting, Signout } from "@todo-liszt/common";

import { selectUserData } from "../../redux/selectors/auth";
import { signOut } from "../../redux/actions/auth";

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

  return (
    <>
      {userData && (
        <NavUserWrapper ref={navUserRef} onClick={handleToggleDropdown}>
          <Avatar
            src={userData.avatar || "/assets/images/avatar-placeholder.png"}
            name={userData.name ? userData.name : userData.email}
          />
          <Text as={TypoTags.Span} variant={TextVariants.Button2}>
            {userData.name ? userData.name : userData.email}
          </Text>
        </NavUserWrapper>
      )}

      {showDropdown && (
        <Portal>
          <DropdownList
            onCloseDropdown={() => setShowDropdown(false)}
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

const NavUserWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${Text} {
    margin-left: 1rem;
  }
`;

export default NavUser;

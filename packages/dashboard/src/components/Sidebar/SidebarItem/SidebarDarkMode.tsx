import { useDispatch, useSelector } from "react-redux";

import * as Styled from "./components";
import { SidebarItemProps } from "./types";
import {
  BrightnessUpLine,
  BrightnessUpFilled,
  Switch,
} from "@todo-liszt/common";
import { selectIsDarkMode } from "../../../redux/selectors/ui";
import { toggleDarkMode } from "../../../redux/actions/ui";

const SidebarDarkMode = ({ isCollapsed }: SidebarItemProps) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleDarkMode());

  return (
    <Styled.SidebarItem isCollapsed={isCollapsed} title="Toggle Dark Mode">
      <Styled.SidebarSwitch isCollapsed={isCollapsed}>
        <Styled.SidebarIcon onClick={handleToggle}>
          {isDarkMode ? <BrightnessUpFilled /> : <BrightnessUpLine />}
        </Styled.SidebarIcon>

        {!isCollapsed && (
          <Switch checked={isDarkMode} onChange={handleToggle} />
        )}
      </Styled.SidebarSwitch>
    </Styled.SidebarItem>
  );
};

export default SidebarDarkMode;

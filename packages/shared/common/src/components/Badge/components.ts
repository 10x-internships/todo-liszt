import styled from "@emotion/styled";

import { BadgeProps, BadgeColors } from "./types";
import { colors } from "../../styles";

export const Badge = styled.span<BadgeProps>`
  display: inline-block;
  height: 1.5rem;
  padding: 0 0.5rem;
  color: ${colors.neutrals["08"]};
  background: ${({ color = BadgeColors.Default }) => {
    switch (color) {
      case BadgeColors.Color_01:
        return colors.primary["01"];
      case BadgeColors.Color_02:
        return colors.primary["02"];
      case BadgeColors.Color_03:
        return colors.primary["04"];
      case BadgeColors.Default:
        return colors.neutrals["02"];
      default:
        return;
    }
  }};
  border-radius: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const BadgeIcon = styled.span`
  display: inline-block;
  margin-right: 0.25rem;

  & svg {
    display: block;
    width: 1rem;
    height: 1rem;
  }
`;

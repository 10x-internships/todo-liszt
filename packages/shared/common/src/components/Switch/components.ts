import styled from "@emotion/styled";
import { colors } from "../../styles";

export const SwitchTrack = styled.span`
  display: inline-flex;
  align-items: center;
  width: 4rem;
  height: 2rem;
  padding: 3px;
  background: ${colors.neutrals["07"]};
  border: 1px solid ${colors.neutrals["06"]};
  border-radius: 2rem;
  transition: var(--transition);
`;

export const SwitchThumb = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${colors.primary["04"]};
  border-radius: 50%;
  transition: var(--transition);
`;

export const Label = styled.label`
  display: inline-block;
  cursor: pointer;

  & input {
    display: none;
  }

  & input:checked + ${SwitchTrack} {
    background: ${colors.primary["04"]};
    border-color: ${colors.primary["04"]};
  }

  & input:checked + ${SwitchTrack} ${SwitchThumb} {
    background: ${colors.neutrals["08"]};
    transform: translateX(2rem);
  }
`;

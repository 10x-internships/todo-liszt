import { SwitchProps } from "./types";
import * as Styled from "./components";

const Switch = (props: SwitchProps) => {
  return (
    <Styled.Label>
      <input type="checkbox" {...props} />
      <Styled.SwitchTrack>
        <Styled.SwitchThumb />
      </Styled.SwitchTrack>
    </Styled.Label>
  );
};

export default Switch;

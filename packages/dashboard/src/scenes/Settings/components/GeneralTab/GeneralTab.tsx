import * as Styled from "./components";
import GeneralDropdown from "./GeneralDropdown";

const GeneralTab = () => {
  return (
    <Styled.Wrapper>
      <GeneralDropdown />
      <Styled.GeneralImage
        src="/assets/images/general-settings.jpg"
        alt="General"
      />
    </Styled.Wrapper>
  );
};

export default GeneralTab;

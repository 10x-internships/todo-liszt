import Image from 'next/image';

import Dropdown from '@components/Dropdown';
import SettingsCard from '../SettingsCard/SettingsCard';
import * as Styled from './components';
import GeneralDropdown from './GeneralDropdown';

const GeneralTab = () => {
  return (
    <Styled.Wrapper>
      <GeneralDropdown />
      <Styled.GeneralImage
        src="/assets/images/general-settings.jpg"
        alt="General"
        width={516}
        height={387}
      />
    </Styled.Wrapper>
  );
};

export default GeneralTab;

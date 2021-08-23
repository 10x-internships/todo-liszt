import { useState } from 'react';

import Dropdown from '@components/Dropdown';

import * as Styled from './components';
import SettingsCard from '../../SettingsCard';

const languageOptions = [
  { id: 0, name: 'English', value: 'english' },
  { id: 1, name: 'Vietnamese', value: 'vietnamese' },
  { id: 2, name: 'Language 2', value: 'test2' },
];

const GeneralDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0].name);

  return (
    <SettingsCard title="App Settings" css={{ width: '50%' }}>
      <Styled.Wrapper>
        <Dropdown
          label="Language"
          options={languageOptions}
          selected={selectedLanguage}
          setSelected={setSelectedLanguage}
        />

        <Dropdown
          label="Timezone"
          options={languageOptions}
          selected={selectedLanguage}
          setSelected={setSelectedLanguage}
        />

        <Dropdown
          label="Week start"
          options={languageOptions}
          selected={selectedLanguage}
          setSelected={setSelectedLanguage}
        />
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default GeneralDropdown;

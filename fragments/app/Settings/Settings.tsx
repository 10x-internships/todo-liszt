import { useState } from 'react';

import SubNavItem from '@components/SubNavItem';

import * as Styled from './components';
import SettingsCard from './SettingsCard/SettingsCard';
import AccountTab from './AccountTab';
import GeneralTab from './GeneralTab';

const Settings = () => {
  const [tab, setTab] = useState('account');

  const handleAccountTab = () => setTab('account');
  const handleGeneralTab = () => setTab('general');

  return (
    <Styled.Wrapper>
      <Styled.SettingsTabs>
        <SubNavItem isActive={tab === 'account'} isTab onClick={handleAccountTab}>
          Account
        </SubNavItem>
        <SubNavItem isActive={tab === 'general'} isTab onClick={handleGeneralTab}>
          General
        </SubNavItem>
      </Styled.SettingsTabs>

      <Styled.SettingsContent>
        {/* Account */}
        {tab === 'account' && <AccountTab />}
        {/* General */}
        {tab === 'general' && <GeneralTab />}
      </Styled.SettingsContent>
    </Styled.Wrapper>
  );
};

export default Settings;

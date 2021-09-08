import { useState } from 'react';

import { SubNavItem } from '@todo-liszt/common';

import * as Styled from './components';
import AccountTab from './AccountTab';
import GeneralTab from './GeneralTab';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const [tab, setTab] = useState('account');
  const { t } = useTranslation();

  const handleAccountTab = () => setTab('account');
  const handleGeneralTab = () => setTab('general');

  return (
    <Styled.Wrapper>
      <Styled.SettingsTabs>
        <SubNavItem isActive={tab === 'account'} isTab onClick={handleAccountTab}>
          {t('scene.Settings.accountTab')}
        </SubNavItem>
        <SubNavItem isActive={tab === 'general'} isTab onClick={handleGeneralTab}>
          {t('scene.Settings.generalTab')}
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

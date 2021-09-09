import { useTranslation } from 'react-i18next';

import * as Styled from './components';
import SettingsCard from '../../SettingsCard';
import LanguageDropdown from '../LanguageDropdown';
import WeekStartDropdown from '../WeekStartDropdown';
import TimeZoneDropdown from '../TimeZoneDropdown';

const GeneralDropdown = () => {
  const { t } = useTranslation();

  return (
    <SettingsCard title={t('scene.Settings.AppSettings.title')}>
      <Styled.Wrapper>
        <LanguageDropdown />
        <TimeZoneDropdown />
        <WeekStartDropdown />
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default GeneralDropdown;

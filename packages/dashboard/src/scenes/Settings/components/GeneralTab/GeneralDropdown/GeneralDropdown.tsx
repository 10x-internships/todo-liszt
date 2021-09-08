import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, DropdownItem } from '@components/Dropdown';
import { setLanguage } from '@redux/actions/settings';
import { selectLanguage } from '@redux/selectors/settings';

import * as Styled from './components';
import SettingsCard from '../../SettingsCard';

const languageOptions = [
  { id: 0, name: 'English', value: 'en-US' },
  { id: 1, name: 'Tiếng Việt', value: 'vi-VN' },
];

const timezoneOptions = [
  { id: 0, name: 'America, New York', value: 'test' },
  { id: 1, name: 'Asia, Vietnam', value: 'test' },
];

const dayOptions = [
  { id: 0, name: 'scene.Settings.AppSettings.WeekStart.monday', value: 'monday' },
  { id: 1, name: 'scene.Settings.AppSettings.WeekStart.sunday', value: 'sunday' },
];

const getLanguageName = (lang: string) => {
  switch (lang) {
    case 'en-US':
      return 'English';
    case 'vi-VN':
      return 'Tiếng Việt';
    default:
      return 'English';
  }
};

const GeneralDropdown = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(timezoneOptions[0].name);
  const [selectedDay, setSelectedDay] = useState(dayOptions[0].name);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage) || i18n.language;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <SettingsCard title={t('scene.Settings.AppSettings.title')}>
      <Styled.Wrapper>
        <Dropdown
          label={t('scene.Settings.AppSettings.Language.label')}
          selected={getLanguageName(language)}
        >
          {languageOptions.map((option) => (
            <DropdownItem
              key={option.id}
              option={option}
              onClick={() => {
                dispatch(setLanguage(option.value));
              }}
            />
          ))}
        </Dropdown>

        <Dropdown
          label={t('scene.Settings.AppSettings.Timezone.label')}
          selected={selectedTimeZone}
        >
          {timezoneOptions.map((option) => (
            <DropdownItem key={option.id} option={option} />
          ))}
        </Dropdown>

        <Dropdown label={t('scene.Settings.AppSettings.WeekStart.label')} selected={t(selectedDay)}>
          {dayOptions.map((option) => (
            <DropdownItem key={option.id} option={option} />
          ))}
        </Dropdown>
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default GeneralDropdown;

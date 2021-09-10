import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, DropdownItem } from '@components/Dropdown';
import { setLanguage } from '@redux/actions/settings';
import { selectLanguage } from '@redux/selectors/settings';

const languageOptions = [
  { id: 0, name: 'English', value: 'en-US' },
  { id: 1, name: 'Tiếng Việt', value: 'vi-VN' },
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

const LanguageDropdown = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  return (
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
  );
};

export default LanguageDropdown;

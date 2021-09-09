import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, DropdownItem } from '@components/Dropdown';
import { setWeekStart } from '@redux/actions/settings';
import { selectWeekStart } from '@redux/selectors/settings';

const dayOptions = [
  { id: 0, name: 'scene.Settings.AppSettings.WeekStart.monday', value: 'monday' },
  { id: 1, name: 'scene.Settings.AppSettings.WeekStart.sunday', value: 'sunday' },
];

const getWeekStart = (day: string) => {
  switch (day) {
    case 'monday':
      return 'scene.Settings.AppSettings.WeekStart.monday';
    case 'sunday':
      return 'scene.Settings.AppSettings.WeekStart.sunday';
    default:
      return '';
  }
};

const WeekStartDropdown = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const weekStart = useSelector(selectWeekStart);

  return (
    <Dropdown
      label={t('scene.Settings.AppSettings.WeekStart.label')}
      selected={t(getWeekStart(weekStart))}
    >
      {dayOptions.map((option) => (
        <DropdownItem
          key={option.id}
          option={option}
          isTranslated
          onClick={() => {
            dispatch(setWeekStart(option.value));
          }}
        />
      ))}
    </Dropdown>
  );
};

export default WeekStartDropdown;

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, DropdownItem } from '@components/Dropdown';

import timezoneOptions from './timezoneOptions';

const getTimezoneName = (value: string) => {
  return timezoneOptions.find((option) => option.value === value)?.name;
};

const TimeZoneDropdown = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(timezoneOptions[0].name);
  const { t } = useTranslation();

  return (
    <Dropdown label={t('scene.Settings.AppSettings.Timezone.label')} selected={selectedTimeZone}>
      {timezoneOptions.map((option) => (
        <DropdownItem key={option.id} option={option} />
      ))}
    </Dropdown>
  );
};

export default TimeZoneDropdown;

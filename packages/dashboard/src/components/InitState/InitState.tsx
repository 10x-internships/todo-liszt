import { selectLanguage, selectTimezone } from '@redux/selectors/settings';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const InitState: React.FC = ({ children }) => {
  const timezone = useSelector(selectTimezone) || dayjs.tz.guess();
  const language = useSelector(selectLanguage);

  const { i18n } = useTranslation();

  useEffect(() => {
    dayjs.tz.setDefault(timezone);
  }, [timezone]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return <>{children}</>;
};

export default InitState;

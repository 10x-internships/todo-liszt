import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import en from 'dayjs/locale/en';
import vi from 'dayjs/locale/vi';
import i18next from 'i18next';

const getLocale = (locale: string) => {
  switch (locale) {
    case 'en-US':
      return en;
    case 'vi-VN':
      return vi;
    default:
      return en;
  }
};

dayjs.extend(utc);
dayjs.extend(timezone);

const locale = i18next.language;
dayjs.locale(getLocale(locale));

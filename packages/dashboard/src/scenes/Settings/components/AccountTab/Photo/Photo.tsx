import { Button, ButtonVariants, Text, TextVariants, TypoTags, Avatar } from '@todo-liszt/common';
import { useTranslation } from 'react-i18next';

import SettingsCard from '../../SettingsCard/SettingsCard';

import * as Styled from './components';

const Photo = () => {
  const { t } = useTranslation();

  return (
    <SettingsCard title={t('scene.Settings.Photo.title')}>
      <Styled.Wrapper>
        <Avatar
          src="/assets/images/avatar-placeholder.png"
          name="Avatar"
          width="12.375rem"
          height="12.375rem"
        />

        <Styled.UploadPhoto>
          <Button variant={ButtonVariants.Theme}>{t('scene.Settings.Photo.Button.upload')}</Button>
          <Text as={TypoTags.P} variant={TextVariants.Caption1}>
            {t('scene.Settings.Photo.uploadText')}
          </Text>
        </Styled.UploadPhoto>
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default Photo;

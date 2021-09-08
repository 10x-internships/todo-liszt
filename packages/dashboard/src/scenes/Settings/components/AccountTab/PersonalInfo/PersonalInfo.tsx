import { Button, ButtonVariants, Input } from '@todo-liszt/common';
import { useTranslation } from 'react-i18next';

import SettingsCard from '../../SettingsCard/SettingsCard';
import * as Styled from './components';

const PersonalInfo = () => {
  const { t } = useTranslation();

  return (
    <SettingsCard title={t('scene.Settings.PersonalInfo.title')}>
      <Styled.FormInfo>
        <Input label={t('scene.Settings.PersonalInfo.NameInput.label')} id="name" />
        <Input label="Email" id="email" />

        <Styled.ButtonsWrapper>
          <Button variant={ButtonVariants.Theme}>
            {t('scene.Settings.PersonalInfo.Button.cancel')}
          </Button>
          <Button>{t('scene.Settings.PersonalInfo.Button.update')}</Button>
        </Styled.ButtonsWrapper>
      </Styled.FormInfo>
    </SettingsCard>
  );
};

export default PersonalInfo;

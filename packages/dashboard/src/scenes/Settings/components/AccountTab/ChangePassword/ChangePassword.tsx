import { Button, ButtonVariants, Input } from '@todo-liszt/common';

import * as Styled from './components';
import SettingsCard from '../../SettingsCard/SettingsCard';
import { useTranslation } from 'react-i18next';

const ChangePassword = () => {
  const { t } = useTranslation();

  return (
    <SettingsCard title={t('scene.Settings.ChangePassword.title')}>
      <Styled.FormPassword>
        <Input
          label={t('scene.Settings.ChangePassword.OldPasswordInput.label')}
          id="old-password"
        />
        <Input
          label={t('scene.Settings.ChangePassword.NewPasswordInput.label')}
          id="new-password"
        />
        <Input
          label={t('scene.Settings.ChangePassword.ConfirmPasswordInput.label')}
          id="confirm-password"
        />

        <Styled.ButtonsWrapper>
          <Button variant={ButtonVariants.Theme}>
            {t('scene.Settings.ChangePassword.Button.cancel')}
          </Button>
          <Button>{t('scene.Settings.ChangePassword.Button.update')}</Button>
        </Styled.ButtonsWrapper>
      </Styled.FormPassword>
    </SettingsCard>
  );
};

export default ChangePassword;

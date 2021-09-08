import SettingsCard from '../../SettingsCard/SettingsCard';

import { Text, TextVariants, TypoTags, Button, ButtonColors } from '@todo-liszt/common';

import * as Styled from './components';
import { useTranslation } from 'react-i18next';

const OtherSettings = () => {
  const { t } = useTranslation();

  return (
    <SettingsCard title={t('scene.Settings.OtherSettings.title')}>
      <Styled.Wrapper>
        <Text as={TypoTags.P} variant={TextVariants.Button2}>
          {t('scene.Settings.OtherSettings.desc1')}
        </Text>
        <Text as={TypoTags.P} variant={TextVariants.Caption1}>
          {t('scene.Settings.OtherSettings.desc2')}
        </Text>
        <Button bgColor={ButtonColors.Primary_03}>
          {t('scene.Settings.OtherSettings.Button.delete')}
        </Button>
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default OtherSettings;

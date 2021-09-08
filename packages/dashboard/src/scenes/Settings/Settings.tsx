import { useTranslation } from 'react-i18next';
import SceneHeader from '../../components/SceneHeader';
import SettingsContainer from './containers/SettingsContainer';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SceneHeader title={t('scene.Settings.title')} />
      <SettingsContainer />
    </>
  );
};

export default SettingsPage;

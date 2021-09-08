import { Button, ButtonVariants, ButtonSizes } from '@todo-liszt/common';
import { useHistory } from 'react-router-dom';

import SceneHeader from '@components/SceneHeader';

import ListForm from '../ListForm';
import { useTranslation } from 'react-i18next';

const ListCreate = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <form autoComplete="off">
      <SceneHeader title={t('scene.Lists.ListCreate.title')}>
        <Button
          variant={ButtonVariants.Theme}
          size={ButtonSizes.Medium}
          onClick={() => history.replace('/app/list')}
        >
          {t('scene.Lists.ListCreate.Button.cancel')}
        </Button>
        <Button type="submit" size={ButtonSizes.Medium}>
          {t('scene.Lists.ListCreate.Button.create')}
        </Button>
      </SceneHeader>

      <ListForm />
    </form>
  );
};

export default ListCreate;

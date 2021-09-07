import { Redirect } from 'react-router-dom';

import pathConfig from '@configs/path';
import { ListListing, ListCreate, ListUpdate } from '@scenes/List';
import Calendar from '@scenes/Calendar';
import Settings from '@scenes/Settings';

const routesConfig = [
  {
    exact: true,
    path: pathConfig.app.list,
    component: ListListing,
  },
  {
    exact: true,
    path: pathConfig.app.listCreate,
    component: ListCreate,
  },
  {
    exact: true,
    path: pathConfig.app.listUpdate,
    component: ListUpdate,
  },
  {
    exact: true,
    path: pathConfig.app.calendar,
    component: Calendar,
  },
  {
    exact: true,
    path: pathConfig.app.settings,
    component: Settings,
  },
  {
    exact: true,
    path: pathConfig.app.home,
    component: () => <Redirect to={pathConfig.app.list} />,
  },
  {
    exact: true,
    path: pathConfig.app.index,
    component: () => <Redirect to={pathConfig.app.list} />,
  },
];

export default routesConfig;

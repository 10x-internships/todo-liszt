import { Redirect } from "react-router-dom";

import pathName from "../config/pathName";
import { ListListing, ListCreate, ListUpdate } from "../scenes/List";
import Calendar from "../scenes/Calendar";
import Settings from "../scenes/Settings";

const routesConfig = [
  {
    exact: true,
    path: pathName.app.list,
    component: ListListing,
  },
  {
    exact: true,
    path: pathName.app.listCreate,
    component: ListCreate,
  },
  {
    exact: true,
    path: pathName.app.listUpdate,
    component: ListUpdate,
  },
  {
    exact: true,
    path: pathName.app.calendar,
    component: Calendar,
  },
  {
    exact: true,
    path: pathName.app.settings,
    component: Settings,
  },
  {
    exact: true,
    path: pathName.app.home,
    component: () => <Redirect to={pathName.app.list} />,
  },
  {
    exact: true,
    path: pathName.app.index,
    component: () => <Redirect to={pathName.app.list} />,
  },
];

export default routesConfig;

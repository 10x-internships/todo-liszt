import { List, Calendar, User, Setting } from '@components/Icons';

const sidebarData = [
  {
    id: 1,
    name: 'List',
    icon: <List />,
    path: '/app/list',
  },
  {
    id: 2,
    name: 'Calendar',
    icon: <Calendar />,
    path: '/app/calendar',
  },
  {
    id: 3,
    name: 'Users',
    icon: <User />,
    path: '/app/users',
  },
  {
    id: 4,
    name: 'Audit Logs',
    icon: <Setting />,
    path: '/app/audit-logs',
  },
];

export default sidebarData;

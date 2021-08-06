import { List, Calendar, User, Setting } from '@components/Icons';

const sidebarData = [
  {
    id: 1,
    name: 'List',
    icon: <List />,
    path: '/dashboard/list',
  },
  {
    id: 2,
    name: 'Calendar',
    icon: <Calendar />,
    path: '/dashboard/calendar',
  },
  {
    id: 3,
    name: 'Users',
    icon: <User />,
    path: '/dashboard/users',
  },
  {
    id: 4,
    name: 'Audit Logs',
    icon: <Setting />,
    path: '/dashboard/audit-logs',
  },
];

export default sidebarData;

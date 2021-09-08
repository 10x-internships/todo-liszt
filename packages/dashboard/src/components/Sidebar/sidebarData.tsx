import { List, Calendar, User, Setting } from '@todo-liszt/common';

const sidebarData = [
  {
    id: 1,
    name: 'component.Sidebar.SidebarLink.List',
    icon: <List />,
    path: '/app/list',
  },
  {
    id: 2,
    name: 'component.Sidebar.SidebarLink.Calendar',
    icon: <Calendar />,
    path: '/app/calendar',
  },
  {
    id: 3,
    name: 'component.Sidebar.SidebarLink.Users',
    icon: <User />,
    path: '/app/users',
  },
  {
    id: 4,
    name: 'component.Sidebar.SidebarLink.AuditLogs',
    icon: <Setting />,
    path: '/app/audit-logs',
  },
];

export default sidebarData;

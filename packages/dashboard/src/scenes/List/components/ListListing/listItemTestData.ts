export type itemDataTypes = {
  id: number;
  task: string;
  schedule?: { startDate: string; endDate: string };
  color?: string;
  subTasks: number;
};

const listItemTestData: itemDataTypes[] = [
  {
    id: 1,
    task: 'Quarterly newsletter',
    schedule: {
      startDate: '2021-05-05T16:00:00.000Z',
      endDate: '2021-05-29T16:00:00.000Z',
    },
    color: 'tomato',
    subTasks: 0,
  },
  {
    id: 2,
    task: 'Recruiting blog post',
    schedule: {
      startDate: '2021-05-05T16:00:00.000Z',
      endDate: '2021-05-29T16:00:00.000Z',
    },
    color: 'cyan',
    subTasks: 2,
  },
  {
    id: 3,
    task: 'Mobile app launch',
    schedule: {
      startDate: '2021-05-05T16:00:00.000Z',
      endDate: '2021-05-29T16:00:00.000Z',
    },
    color: 'purple',
    subTasks: 0,
  },
  {
    id: 4,
    task: 'Interview John H.',
    schedule: {
      startDate: '2021-05-05T16:00:00.000Z',
      endDate: '2021-05-29T16:00:00.000Z',
    },
    color: 'pink',
    subTasks: 4,
  },
  {
    id: 5,
    task: 'Submit updates to mobile storefronts',
    color: 'tomato',
    subTasks: 4,
  },
  {
    id: 6,
    task: 'Schedule meeting with Alex',
    color: 'cyan',
    subTasks: 9,
  },
  {
    id: 7,
    task: 'Homepage refresh',
    schedule: {
      startDate: '2021-05-05T16:00:00.000Z',
      endDate: '2021-05-29T16:00:00.000Z',
    },
    color: 'purple',
    subTasks: 8,
  },
  {
    id: 8,
    task: 'Onboard new Sales team members',
    schedule: {
      startDate: '2021-05-05T16:00:00.000Z',
      endDate: '2021-05-29T16:00:00.000Z',
    },
    color: 'pink',
    subTasks: 4,
  },
  {
    id: 9,
    task: 'Review editoral calendar',
    subTasks: 2,
  },
  {
    id: 10,
    task: 'Interview Louis',
    subTasks: 2,
  },
];

export default listItemTestData;

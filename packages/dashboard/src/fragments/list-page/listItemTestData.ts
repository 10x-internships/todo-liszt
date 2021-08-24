export type itemDataTypes = {
  id: number;
  task: string;
  schedule?: string;
  color?: string;
  subTasks: number;
};

const listItemTestData: itemDataTypes[] = [
  {
    id: 1,
    task: "Quarterly newsletter",
    schedule: "June 1, 2021 - August 30, 2021",
    color: "tomato",
    subTasks: 0,
  },
  {
    id: 2,
    task: "Recruiting blog post",
    schedule: "May 24, 2021 - May 29, 2021",
    color: "cyan",
    subTasks: 2,
  },
  {
    id: 3,
    task: "Mobile app launch",
    schedule: "Today",
    color: "purple",
    subTasks: 0,
  },
  {
    id: 4,
    task: "Interview John H.",
    schedule: "April 01, 2021 - April 25, 2021",
    color: "pink",
    subTasks: 4,
  },
  {
    id: 5,
    task: "Submit updates to mobile storefronts",
    color: "tomato",
    subTasks: 4,
  },
  {
    id: 6,
    task: "Schedule meeting with Alex",
    color: "cyan",
    subTasks: 9,
  },
  {
    id: 7,
    task: "Homepage refresh",
    schedule: "March 12, 2021 - April 12, 2021",
    color: "purple",
    subTasks: 8,
  },
  {
    id: 8,
    task: "Onboard new Sales team members",
    schedule: "June 1, 2021 - August 30, 2021",
    color: "pink",
    subTasks: 4,
  },
  {
    id: 9,
    task: "Review editoral calendar",
    subTasks: 2,
  },
  {
    id: 10,
    task: "Interview Louis",
    subTasks: 2,
  },
];

export default listItemTestData;

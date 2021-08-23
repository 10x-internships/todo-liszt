import { v4 as uuidv4 } from 'uuid';

const tasksData = [
  {
    id: uuidv4(),
    name: 'Test 1',
    startDate: '2021-08-20',
    startTime: '10:00',
    endDate: '2021-08-22',
    endTime: '21:00',
    color: '#61BD4F',
  },
  {
    id: uuidv4(),
    name: 'Test 2',
    startDate: '2021-08-23',
    startTime: '10:00',
    endDate: '2021-08-23',
    endTime: '21:00',
    color: '#C377E0',
  },
  {
    id: uuidv4(),
    name: 'Test 3',
    startDate: '2021-08-23',
    startTime: '10:00',
    endDate: '2021-09-29',
    endTime: '21:00',
    color: '#FF9F1A',
  },
  {
    id: uuidv4(),
    name: 'Test 4',
    startDate: '2021-08-23',
    startTime: '10:00',
    endDate: '2021-08-23',
    endTime: '21:00',
    color: '#FF9F1A',
  },
  {
    id: uuidv4(),
    name: 'Test 5',
    startDate: '2021-08-23',
    startTime: '10:00',
    endDate: '2021-08-23',
    endTime: '21:00',
    color: '#FF9F1A',
  },
];

export default tasksData;

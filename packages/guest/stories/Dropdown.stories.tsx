import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Dropdown/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const shortOptions = [
  { id: 0, name: 'All Colors', value: '' },
  { id: 1, name: 'Black', value: 'black' },
  { id: 2, name: 'Green', value: 'green' },
  { id: 3, name: 'Pink', value: 'pink' },
  { id: 4, name: 'Purple', value: 'purple' },
];

const longOptions = [
  { id: 0, name: 'All Colors', value: '' },
  { id: 1, name: 'Black', value: 'black' },
  { id: 2, name: 'Green', value: 'green' },
  { id: 3, name: 'Pink', value: 'pink' },
  { id: 4, name: 'Purple', value: 'purple' },
  { id: 5, name: 'Red', value: 'red' },
  { id: 6, name: 'Black', value: 'black' },
  { id: 7, name: 'Green', value: 'green' },
  { id: 8, name: 'Pink', value: 'pink' },
  { id: 9, name: 'Purple', value: 'purple' },
  { id: 10, name: 'Red', value: 'red' },
  { id: 11, name: 'Black', value: 'black' },
  { id: 12, name: 'Green', value: 'green' },
  { id: 13, name: 'Pink', value: 'pink' },
  { id: 14, name: 'Purple', value: 'purple' },
];

export const DropdownBox = () => {
  const [selected, setSelected] = useState<string>(shortOptions[0].name);

  return (
    <div style={{ maxWidth: '20rem' }}>
      <Dropdown options={shortOptions} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export const DropdownWithScroll = () => {
  const [selected, setSelected] = useState<string>(longOptions[0].name);

  return (
    <div style={{ maxWidth: '20rem' }}>
      <Dropdown options={longOptions} selected={selected} setSelected={setSelected} />
    </div>
  );
};

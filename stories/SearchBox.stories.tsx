import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBox from '../components/SearchBox';

export default {
  title: 'Input/Search Box',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

export const Default = () => <SearchBox placeholder="Search everything" />;
export const WithLabel = () => (
  <SearchBox label="Search with label" placeholder="Search everything" id="searchLabel" />
);

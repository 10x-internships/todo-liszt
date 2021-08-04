import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuestNav } from '../components/Nav';

export default {
  title: 'Navbar/Navbar',
  component: GuestNav,
} as ComponentMeta<typeof GuestNav>;

export const Default = () => <GuestNav />;

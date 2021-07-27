import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const WithOutLabel = () => <Checkbox />;
export const WithLabel = () => <Checkbox label="Label" />;

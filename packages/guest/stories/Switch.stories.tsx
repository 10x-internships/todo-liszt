import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '../components/Switch';
import Wrapper from './Wrapper';

export default {
  title: 'Input/Switch Toggle',
  component: Switch,
  argTypes: {
    defaultChecked: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isChecked: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} as ComponentMeta<typeof Switch>;

export const Normal = () => <Switch />;
export const DefaultChecked = () => <Switch defaultChecked />;

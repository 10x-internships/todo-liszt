import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Checkbox';
import Wrapper from './Wrapper';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

export const Normal = () => (
  <Wrapper>
    <div>
      <Checkbox />
    </div>
    <div>
      <Checkbox label="With label" />
    </div>
  </Wrapper>
);

export const DefaultChecked = () => (
  <Wrapper>
    <div>
      <Checkbox defaultChecked={true} />
    </div>
    <div>
      <Checkbox label="With label" defaultChecked={true} />
    </div>
  </Wrapper>
);

export const Disabled = () => (
  <Wrapper>
    <div>
      <Checkbox isDisabled />
    </div>
    <div>
      <Checkbox label="Disabled" isDisabled />
    </div>
    <div>
      <Checkbox label="Disabled with Checked" defaultChecked isDisabled />
    </div>
  </Wrapper>
);

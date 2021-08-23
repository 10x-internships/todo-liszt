import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from '../components/Radio';
import Wrapper from './Wrapper';

export default {
  title: 'Input/Radio',
  component: Radio,
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
} as ComponentMeta<typeof Radio>;

export const Normal = () => (
  <Wrapper>
    <div>
      <Radio name="test" />
    </div>
    <div>
      <Radio label="With label" name="test" />
    </div>
  </Wrapper>
);

export const DefaultChecked = () => (
  <Wrapper>
    <div>
      <Radio defaultChecked={true} />
    </div>
    <div>
      <Radio label="With label" defaultChecked={true} />
    </div>
  </Wrapper>
);

export const Disabled = () => (
  <Wrapper>
    <div>
      <Radio isDisabled />
    </div>
    <div>
      <Radio label="With label" isDisabled />
    </div>
    <div>
      <Radio label="Disabled with checked" defaultChecked={true} isDisabled />
    </div>
  </Wrapper>
);

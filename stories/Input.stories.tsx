import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Input';
import Wrapper from './Wrapper';

export default {
  title: 'Input/Text Field',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = () => {
  return (
    <Wrapper>
      <div>
        <Input label="Email" placeholder="Your email" />
      </div>
      <div>
        <Input label="Email" placeholder="Your email" isError errorMessage="Invalid email" />
      </div>
      <div>
        <Input label="Email" placeholder="Your email" isValid />
      </div>
    </Wrapper>
  );
};

export const WithIcon = () => {
  return <Input label="Password" placeholder="Your password" type="password" />;
};

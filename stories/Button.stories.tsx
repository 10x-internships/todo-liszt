import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';
import StarFilled from '../components/Icons/StarFilled';

export default {
  title: 'Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonNeutral = Template.bind({});
ButtonNeutral.args = {
  children: 'Button',
  size: 'medium',
  variant: 'neutral',
  isDisabled: false,
};

export const ButtonWithIconRight = Template.bind({});
ButtonWithIconRight.args = {
  children: 'Button with Icon',
  size: 'medium',
  variant: 'neutral',
  isDisabled: false,
  rightIcon: <StarFilled />,
};

export const ButtonWithIconLeft = Template.bind({});
ButtonWithIconLeft.args = {
  children: 'Button with Icon',
  size: 'medium',
  variant: 'neutral',
  isDisabled: false,
  leftIcon: <StarFilled />,
};

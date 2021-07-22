import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, TypographySizes } from '../components/Typography';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    variant: {
      options: ['hero', 'headline'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Hero = Template.bind({});
Hero.args = {
  variant: 'hero',
  children: 'Hero',
};

export const Headline = Template.bind({});
Headline.args = {
  variant: 'headline',
  size: TypographySizes.XL,
  children: 'Headline',
};

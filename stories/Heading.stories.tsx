import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, HeadingVariants, TypoTags } from '../components/Typography';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    variant: {
      control: false,
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Hero = Template.bind({});
Hero.args = {
  variant: HeadingVariants.Hero,
  as: TypoTags.H1,
  children: 'Hero',
};

export const Headline1 = Template.bind({});
Headline1.args = {
  variant: HeadingVariants.Headline1,
  as: TypoTags.H1,
  children: 'Headline',
};

export const Headline2 = Template.bind({});
Headline2.args = {
  variant: HeadingVariants.Headline2,
  as: TypoTags.H2,
  children: 'Headline',
};

export const Headline3 = Template.bind({});
Headline3.args = {
  variant: HeadingVariants.Headline3,
  as: TypoTags.H3,
  children: 'Headline',
};

export const Headline4 = Template.bind({});
Headline4.args = {
  variant: HeadingVariants.Headline4,
  as: TypoTags.H4,
  children: 'Headline',
};

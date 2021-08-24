import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextVariants, TypoTags } from '../components/Typography';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    variant: {
      control: false,
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Body1 = Template.bind({});
Body1.args = {
  variant: TextVariants.Body1,
  as: TypoTags.P,
  isBold: false,
  children: 'Body 1',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: TextVariants.Body2,
  as: TypoTags.P,
  isBold: false,
  children: 'Body 2',
};

export const Caption1 = Template.bind({});
Caption1.args = {
  variant: TextVariants.Caption1,
  as: TypoTags.P,
  isBold: false,
  children: 'Caption 1',
};

export const Caption2 = Template.bind({});
Caption2.args = {
  variant: TextVariants.Caption2,
  as: TypoTags.P,
  isBold: false,
  children: 'Caption 2',
};

export const Hairline1 = Template.bind({});
Hairline1.args = {
  variant: TextVariants.Hairline1,
  as: TypoTags.P,
  isBold: false,
  textTransform: 'uppercase',
  children: 'Hairline 1',
};

export const Hairline2 = Template.bind({});
Hairline2.args = {
  variant: TextVariants.Hairline2,
  as: TypoTags.P,
  isBold: false,
  textTransform: 'uppercase',
  children: 'Hairline 2',
};

export const Button1 = Template.bind({});
Button1.args = {
  variant: TextVariants.Button1,
  as: TypoTags.P,
  isBold: false,
  children: 'Button default',
};

export const Button2 = Template.bind({});
Button2.args = {
  variant: TextVariants.Button2,
  as: TypoTags.P,
  isBold: false,
  children: 'Button small',
};

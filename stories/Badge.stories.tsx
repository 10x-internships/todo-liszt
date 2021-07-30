import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cup } from '../components/Icons';
import Badge, { BadgeColors } from '../components/Badge';
import { FlexWrapper } from './Wrapper';

export default {
  title: 'Badge/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Default = () => (
  <FlexWrapper>
    <Badge icon={<Cup />} color={BadgeColors.Color_01}>
      #1
    </Badge>
    <Badge icon={<Cup />} color={BadgeColors.Color_02}>
      #2
    </Badge>
    <Badge icon={<Cup />} color={BadgeColors.Color_03}>
      #3
    </Badge>
    <Badge icon={<Cup />}>Default</Badge>
  </FlexWrapper>
);

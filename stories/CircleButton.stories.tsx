import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircleButton, CircleButtonSizes } from '../components/CircleButton';
import StarFilled from '../components/Icons/StarFilled';

export default {
  title: 'Button/Button Circle',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

export const Neutral = () => (
  <>
    <CircleButton icon={<StarFilled />} size={CircleButtonSizes.Small} />
    <CircleButton icon={<StarFilled />} size={CircleButtonSizes.Medium} />
    <CircleButton icon={<StarFilled />} size={CircleButtonSizes.Large} />
  </>
);

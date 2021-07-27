import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircleButton, CircleButtonSizes } from '../components/CircleButton';
import StarFilled from '../components/Icons/StarFilled';
import { FlexWrapper } from './Wrapper';

export default {
  title: 'Button/Button Circle',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

export const Neutral = () => (
  <FlexWrapper>
    <div>
      <CircleButton icon={<StarFilled />} size={CircleButtonSizes.Small} />
    </div>
    <div>
      <CircleButton icon={<StarFilled />} size={CircleButtonSizes.Medium} />
    </div>
    <div>
      <CircleButton icon={<StarFilled />} size={CircleButtonSizes.Large} />
    </div>
  </FlexWrapper>
);

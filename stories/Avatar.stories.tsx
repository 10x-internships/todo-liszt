import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/Avatar';
import { FlexWrapper } from './Wrapper';
import TestImage from '../public/assets/images/avatar-test.jpg';

export default {
  title: 'Avatar/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// export const Default = () => (
//   <FlexWrapper>
//     {/* eslint-disabled */}
//     <Avatar src={TestImage} alt="avatar" width={48} height={48} />
//   </FlexWrapper>
// );

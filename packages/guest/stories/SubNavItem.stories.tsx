import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubNavItem from '../components/SubNavItem';
import Link from 'next/link';
import { FlexWrapper } from './Wrapper';

export default {
  title: 'Sub Nav/Sub Nav Item',
  component: SubNavItem,
} as ComponentMeta<typeof SubNavItem>;

export const Default = () => (
  <FlexWrapper>
    <SubNavItem href="/" isActive>
      Active
    </SubNavItem>
    <SubNavItem href="/">Default</SubNavItem>
    <SubNavItem href="/" isDeactive>
      Deactive
    </SubNavItem>
    <Link href="/" passHref>
      <SubNavItem>With Next Link</SubNavItem>
    </Link>
  </FlexWrapper>
);

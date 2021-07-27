import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Button,
  ButtonIcon,
  ButtonSizes,
  ButtonVariants,
} from '../components/Button';
import StarFilled from '../components/Icons/StarFilled';
import Wrapper, { FlexWrapper } from './Wrapper';

export default {
  title: 'Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const NeutralVariant = () => (
  <FlexWrapper>
    <div>
      <Button size={ButtonSizes.XSmall}>X Small</Button>
    </div>
    <div>
      <Button>Small</Button>
    </div>
    <div>
      <Button size={ButtonSizes.Medium}>Medium</Button>
    </div>
  </FlexWrapper>
);

export const ThemeVariant = () => (
  <FlexWrapper>
    <div>
      <Button variant={ButtonVariants.Theme} size={ButtonSizes.XSmall}>
        X Small
      </Button>
    </div>
    <div>
      <Button variant={ButtonVariants.Theme}>Small</Button>
    </div>
    <div>
      <Button variant={ButtonVariants.Theme} size={ButtonSizes.Medium}>
        Medium
      </Button>
    </div>
  </FlexWrapper>
);

export const WithIcon = () => (
  <FlexWrapper>
    <div>
      <Button variant={ButtonVariants.Theme} size={ButtonSizes.XSmall}>
        <ButtonIcon
          icon={<StarFilled />}
          iconSpaceSize={ButtonSizes.XSmall}
          position="left"
        />
        X Small
      </Button>
    </div>
    <div>
      <Button variant={ButtonVariants.Theme}>
        Small
        <ButtonIcon icon={<StarFilled />} position="right" />
      </Button>
    </div>
    <div>
      <Button variant={ButtonVariants.Theme} size={ButtonSizes.Medium}>
        Medium
        <ButtonIcon icon={<StarFilled />} position="right" />
      </Button>
    </div>
  </FlexWrapper>
);

export const AsLink = () => (
  <FlexWrapper>
    <div>
      <Button href="https://www.google.com" size={ButtonSizes.XSmall}>
        Go to Google
      </Button>
    </div>
    <div>
      <Button href="https://www.youtube.com" size={ButtonSizes.Small}>
        Go to YouTube
      </Button>
    </div>
    <div>
      <Button href="https://www.facebook.com" size={ButtonSizes.Medium}>
        Go to Facebook
      </Button>
    </div>
  </FlexWrapper>
);

export const Disabled = () => (
  <FlexWrapper>
    <div>
      <Button variant={ButtonVariants.Theme} isDisabled>
        Disabled
      </Button>
    </div>
    <div>
      <Button isDisabled>Disabled</Button>
    </div>
  </FlexWrapper>
);

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Button,
  ButtonIcon,
  ButtonSizes,
  ButtonVariants,
} from '../components/Button';
import StarFilled from '../components/Icons/StarFilled';
import Link from 'next/link';

export default {
  title: 'Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonNeutral = () => (
  <>
    <Button size={ButtonSizes.XSmall}>X Small</Button>
    <Button>Small</Button>
    <Button size={ButtonSizes.Medium}>Medium</Button>
  </>
);

export const ButtonTheme = () => (
  <>
    <Button variant={ButtonVariants.Theme} size={ButtonSizes.XSmall}>
      X Small
    </Button>
    <Button variant={ButtonVariants.Theme}>Small</Button>
    <Button variant={ButtonVariants.Theme} size={ButtonSizes.Medium}>
      Medium
    </Button>
  </>
);

export const ButtonWithIcon = () => (
  <>
    <Button variant={ButtonVariants.Theme} size={ButtonSizes.XSmall}>
      <ButtonIcon
        icon={<StarFilled />}
        iconSpaceSize={ButtonSizes.XSmall}
        position="left"
      />
      X Small
    </Button>
    <Button variant={ButtonVariants.Theme}>
      Small
      <ButtonIcon icon={<StarFilled />} position="right" />
    </Button>
  </>
);

export const ButtonAsLink = () => (
  <>
    <Link href="/" passHref>
      <Button size={ButtonSizes.XSmall} asLink>
        X Small
      </Button>
    </Link>
    <Link href="/" passHref>
      <Button asLink>Small</Button>
    </Link>
    <Link href="/" passHref>
      <Button size={ButtonSizes.Medium} asLink>
        Medium
      </Button>
    </Link>
  </>
);

export const ButtonDisabled = () => (
  <>
    <Button variant={ButtonVariants.Theme} isDisabled>
      Small
    </Button>
    <Button isDisabled>Small</Button>
  </>
);

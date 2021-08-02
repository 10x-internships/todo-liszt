import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toast from '../components/Toast';
import Wrapper from './Wrapper';

export default {
  title: 'Toast/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

export const Default = () => (
  <Wrapper>
    <Toast isSuccess>Success message</Toast>
    <Toast isSuccess isCloseable>
      Closable toast
    </Toast>
    <Toast isError>Error message</Toast>
  </Wrapper>
);

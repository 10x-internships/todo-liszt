import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';
import { FlexWrapper } from './Wrapper';
import { useDispatch } from 'react-redux';
import { showToast } from '../redux/actions/toasts';

export default {
  title: 'Toast/Toast',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => {
  const dispatch = useDispatch();

  return (
    <FlexWrapper>
      <div>
        <Button onClick={() => dispatch(showToast({ message: 'Error message', state: 'error' }))}>
          Show error toast
        </Button>
      </div>
      <div>
        <Button
          onClick={() => dispatch(showToast({ message: 'Success message', state: 'success' }))}
        >
          Show success toast
        </Button>
      </div>
    </FlexWrapper>
  );
};

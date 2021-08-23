import styled from '@emotion/styled';
import { animated } from 'react-spring';

import { colors } from '../../styles/theme';
import { Text, TextVariants, TypoTags } from '../Typography';
import { ToastTypes } from './types';

interface ToastProps extends React.ComponentPropsWithoutRef<'div'>, ToastTypes {}

const ToastItemWrapper = styled(animated.div)<Omit<ToastProps, 'message'>>`
  min-width: 15.625rem;
  max-width: 20rem;
  padding: 0.75rem 1rem;
  margin: 1rem;
  color: ${colors.neutrals['08']};
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ state }) => {
    switch (state) {
      case 'success':
        return `background: ${colors.primary['04']};`;
      case 'error':
        return `background: ${colors.primary['03']};`;
      default:
        return;
    }
  }}
`;

const Toast = ({ children, message, ...others }: ToastProps) => {
  return (
    <ToastItemWrapper {...others}>
      <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
        {message}
      </Text>
    </ToastItemWrapper>
  );
};

export default Toast;

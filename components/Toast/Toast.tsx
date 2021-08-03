import styled from '@emotion/styled';

import { colors } from '../../styles/theme';
import { Text, TextVariants, TypoTags } from '../Typography';
import { Close } from '../Icons';

interface ToastProps {
  state: 'error' | 'success';
  isCloseable?: boolean;
  children?: React.ReactNode;
}

const ToastItemWrapper = styled.div<ToastProps>`
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

const ToastCloseIcon = styled.div`
  margin-left: 1rem;
  cursor: pointer;

  & svg {
    display: block;
    width: 1rem;
    height: 1rem;
  }
`;

const Toast = ({ children, isCloseable, ...others }: ToastProps) => {
  return (
    <ToastItemWrapper {...others}>
      <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
        {children}
      </Text>
      {isCloseable && (
        <ToastCloseIcon>
          <Close />
        </ToastCloseIcon>
      )}
    </ToastItemWrapper>
  );
};

export default Toast;

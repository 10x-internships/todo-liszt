import { ButtonIconProps } from './types';
import { StyledButtonIcon } from './components';

const ButtonIcon = (props: ButtonIconProps) => {
  return <StyledButtonIcon {...props}>{props.icon}</StyledButtonIcon>;
};

export default ButtonIcon;

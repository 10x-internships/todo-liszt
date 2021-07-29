import { InputIcon as InputIconWrapper } from './components';

interface InputIconWrapper {
  icon?: React.ReactNode;
}

const InputIcon = (props: InputIconWrapper) => {
  return <InputIconWrapper>{props.icon}</InputIconWrapper>;
};

export default InputIcon;

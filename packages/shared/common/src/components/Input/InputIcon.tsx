import { InputIcon as InputIconWrapper } from "./components";

interface InputIconWrapper extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const InputIcon = ({ children, ...others }: InputIconWrapper) => {
  return <InputIconWrapper {...others}>{children}</InputIconWrapper>;
};

export default InputIcon;

import * as Styled from "./components";

interface CircleButtonProps extends React.ComponentPropsWithRef<"button"> {
  icon: React.ReactNode;
  isDisabled?: boolean;
}

const CircleButton = ({ icon, isDisabled, ...others }: CircleButtonProps) => {
  return (
    <Styled.CircleButton disabled={isDisabled} {...others}>
      {icon}
    </Styled.CircleButton>
  );
};

export default CircleButton;

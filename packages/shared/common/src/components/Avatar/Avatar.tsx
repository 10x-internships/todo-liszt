import * as Styled from "./components";

interface AvatarProps extends React.ComponentPropsWithRef<"img"> {
  src: string;
  name: string;
  width?: string;
  height?: string;
}

const Avatar = ({ src, name, width, height, ...others }: AvatarProps) => {
  return (
    <Styled.Wrapper width={width} height={height}>
      <img src={src} alt={name} loading="lazy" {...others} />
    </Styled.Wrapper>
  );
};

export default Avatar;

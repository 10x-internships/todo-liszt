import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";

const StyledAvatar = styled(Image)`
  border-radius: 50%;
`;

const Avatar = ({ src, alt, objectFit, ...others }: ImageProps) => {
  return (
    <StyledAvatar src={src as any} alt={alt} objectFit="cover" {...others} />
  );
};

export default Avatar;

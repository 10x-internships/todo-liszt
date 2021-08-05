import styled from '@emotion/styled';
import Image from 'next/image';

interface AuthLayoutProps {
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
}

const StyledAuthLayout = styled.div`
  height: 100vh;
  display: flex;

  & > * {
    flex-basis: 50%;
  }
`;

const AuthBackground = styled.div`
  position: relative;
`;

const AuthContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthContent = styled.div`
  flex: 1;
`;

const AuthLayout = ({ src, alt, children }: AuthLayoutProps) => {
  return (
    <StyledAuthLayout>
      <AuthBackground>
        <Image
          alt={alt}
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          priority={true}
        />
      </AuthBackground>
      <AuthContentWrapper>
        <AuthContent>{children}</AuthContent>
      </AuthContentWrapper>
    </StyledAuthLayout>
  );
};

export default AuthLayout;

import styled from '@emotion/styled';
import Image from 'next/image';

interface AuthLayoutProps {
  src: StaticImageData;
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
  flex-direction: column;
`;

const AuthContent = styled.div`
  width: 22.5rem;
`;

const AuthLayout = ({ src, children }: AuthLayoutProps) => {
  return (
    <StyledAuthLayout>
      <AuthBackground>
        <Image
          alt="Coming soon"
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
        />
      </AuthBackground>
      <AuthContentWrapper>
        <AuthContent>{children}</AuthContent>
      </AuthContentWrapper>
    </StyledAuthLayout>
  );
};

export default AuthLayout;

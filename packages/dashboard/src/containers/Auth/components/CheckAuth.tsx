import Spinner from "@components/Spinner";

interface CheckAuthProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

const CheckAuth = ({ children, isLoading }: CheckAuthProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
};

export default CheckAuth;

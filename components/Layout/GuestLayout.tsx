import { GuestNav } from '../Nav';

const Guest: React.FC = ({ children }) => {
  return (
    <>
      <GuestNav />
      <main>{children}</main>
    </>
  );
};

export default Guest;

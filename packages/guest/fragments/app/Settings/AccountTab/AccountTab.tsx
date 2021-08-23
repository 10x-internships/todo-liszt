import * as Styled from './components';
import ChangePassword from './ChangePassword';
import OtherSettings from './OtherSettings';
import PersonalInfo from './PersonalInfo';
import Photo from './Photo';

const AccountTab = () => {
  return (
    <>
      <Styled.AccountTop>
        <Photo />
        <PersonalInfo />
      </Styled.AccountTop>

      <Styled.AccountBottom>
        <ChangePassword />
        <OtherSettings />
      </Styled.AccountBottom>
    </>
  );
};

export default AccountTab;

import { Button, ButtonVariants } from '@components/Button';
import { Input } from '@components/Input';
import SettingsCard from '../../SettingsCard/SettingsCard';
import * as Styled from './components';

const ChangePassword = () => {
  return (
    <SettingsCard title="Change Password">
      <Styled.FormPassword>
        <Input label="Old password" id="old-password" />
        <Input label="New password" id="new-password" />
        <Input label="Confirm new password" id="confirm-password" />

        <Styled.ButtonsWrapper>
          <Button variant={ButtonVariants.Theme}>Cancel</Button>
          <Button>Change password</Button>
        </Styled.ButtonsWrapper>
      </Styled.FormPassword>
    </SettingsCard>
  );
};

export default ChangePassword;

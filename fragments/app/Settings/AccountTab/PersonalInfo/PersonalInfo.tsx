import { Button, ButtonVariants } from '@components/Button';
import { Input } from '@components/Input';
import SettingsCard from '../../SettingsCard/SettingsCard';
import * as Styled from './components';

const PersonalInfo = () => {
  return (
    <SettingsCard title="Personal Information">
      <Styled.FormInfo>
        <Input label="Name" id="name" defaultValue="Krillin" />
        <Input label="Email" id="email" defaultValue="krillin@gmail.com" />

        <Styled.ButtonsWrapper>
          <Button variant={ButtonVariants.Theme}>Cancel</Button>
          <Button>Update</Button>
        </Styled.ButtonsWrapper>
      </Styled.FormInfo>
    </SettingsCard>
  );
};

export default PersonalInfo;

import Avatar from '@components/Avatar';
import { Button, ButtonVariants } from '@components/Button';
import { Text, TextVariants, TypoTags } from '@components/Typography';
import SettingsCard from '../../SettingsCard/SettingsCard';
import * as Styled from './components';

const Photo = () => {
  return (
    <SettingsCard title="Photo">
      <Styled.Wrapper>
        <Avatar src="/assets/images/krillin.jpg" alt="Avatar" width={198} height={198} />

        <Styled.UploadPhoto>
          <Button variant={ButtonVariants.Theme}>Upload photo</Button>
          <Text as={TypoTags.P} variant={TextVariants.Caption1}>
            Pick a photo up to 4MB
          </Text>
        </Styled.UploadPhoto>
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default Photo;

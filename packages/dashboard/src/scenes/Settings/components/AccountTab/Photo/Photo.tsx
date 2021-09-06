import { useSelector } from "react-redux";
import {
  Button,
  ButtonVariants,
  Text,
  TextVariants,
  TypoTags,
  Avatar,
} from "@todo-liszt/common";

import { selectUserData } from "@redux/selectors/auth";

import SettingsCard from "../../SettingsCard/SettingsCard";
import * as Styled from "./components";

const Photo = () => {
  const userProfile = useSelector(selectUserData);

  return (
    <SettingsCard title="Photo">
      <Styled.Wrapper>
        <Avatar
          src={
            userProfile?.avatar
              ? userProfile.avatar
              : "/assets/images/avatar-placeholder.png"
          }
          name="Avatar"
          width="12.375rem"
          height="12.375rem"
        />

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

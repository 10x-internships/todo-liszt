import SettingsCard from "../../SettingsCard/SettingsCard";

import {
  Text,
  TextVariants,
  TypoTags,
  Button,
  ButtonColors,
} from "@todo-liszt/common";

import * as Styled from "./components";

const OtherSettings = () => {
  return (
    <SettingsCard title="Other Settings">
      <Styled.Wrapper>
        <Text as={TypoTags.P} variant={TextVariants.Button2}>
          Permanently delete account
        </Text>
        <Text as={TypoTags.P} variant={TextVariants.Caption1}>
          This will immediately delete all of your data. This can’t be undone.
        </Text>
        <Button bgColor={ButtonColors.Primary_03}>
          Permanently delete account
        </Button>
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default OtherSettings;

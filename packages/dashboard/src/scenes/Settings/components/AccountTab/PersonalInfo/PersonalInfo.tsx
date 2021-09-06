import { useSelector } from "react-redux";

import { Button, ButtonVariants, Input } from "@todo-liszt/common";
import { selectUserData } from "@redux/selectors/auth";

import * as Styled from "./components";
import SettingsCard from "../../SettingsCard/SettingsCard";

const PersonalInfo = () => {
  const userProfile = useSelector(selectUserData);

  return (
    <SettingsCard title="Personal Information">
      <Styled.FormInfo>
        <Input label="Name" id="name" defaultValue={userProfile?.name || ""} />
        <Input
          label="Email"
          id="email"
          defaultValue={userProfile?.email || ""}
        />

        <Styled.ButtonsWrapper>
          <Button variant={ButtonVariants.Theme}>Cancel</Button>
          <Button>Update</Button>
        </Styled.ButtonsWrapper>
      </Styled.FormInfo>
    </SettingsCard>
  );
};

export default PersonalInfo;

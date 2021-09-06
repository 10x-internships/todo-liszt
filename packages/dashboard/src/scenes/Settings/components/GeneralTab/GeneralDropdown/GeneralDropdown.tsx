import { useState } from "react";

import { Dropdown } from "@components/Dropdown";

import * as Styled from "./components";
import SettingsCard from "../../SettingsCard";

const languageOptions = [
  { id: 0, name: "English", value: "english" },
  { id: 1, name: "Vietnamese", value: "vietnamese" },
];

const timezoneOptions = [
  { id: 0, name: "America, New York", value: "english" },
  { id: 1, name: "Asia, Vietnam", value: "vietnamese" },
];

const dayOptions = [
  { id: 0, name: "Monday", value: "monday" },
  { id: 1, name: "Sunday", value: "sunday" },
];

const GeneralDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0].name
  );
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    timezoneOptions[0].name
  );
  const [selectedDay, setSelectedDay] = useState(dayOptions[0].name);

  return (
    <SettingsCard title="App Settings">
      <Styled.Wrapper>
        <Dropdown
          label="Language"
          options={languageOptions}
          selected={selectedLanguage}
          setSelected={setSelectedLanguage}
        />

        <Dropdown
          label="Timezone"
          options={timezoneOptions}
          selected={selectedTimeZone}
          setSelected={setSelectedTimeZone}
        />

        <Dropdown
          label="Week start"
          options={dayOptions}
          selected={selectedDay}
          setSelected={setSelectedDay}
        />
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default GeneralDropdown;

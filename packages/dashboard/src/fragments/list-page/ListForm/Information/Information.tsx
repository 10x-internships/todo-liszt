import { useState } from "react";

import {
  Input,
  Dropdown,
  Heading,
  HeadingVariants,
  TypoTags,
} from "@todo-liszt/common";

import * as Styled from "./components";
import colorOptions from "../../colorOptions";

interface InformationProps {
  itemData?: {
    name: string;
    desc: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    color: string;
  };
}

const Information = ({ itemData }: InformationProps) => {
  const [selected, setSelected] = useState<string>(
    itemData?.color || colorOptions[0].name
  );

  return (
    <Styled.FormInformation>
      <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
        Information
      </Heading>
      <Styled.FormInputs>
        <Input
          label="Name"
          id="name"
          placeholder="Enter name"
          defaultValue={itemData?.name}
        />
        <Input
          as="textarea"
          label="Description"
          id="desc"
          placeholder="Enter Description"
          defaultValue={itemData?.desc}
        />

        <Styled.FormDate>
          <Input
            label="Start date"
            id="start-date"
            placeholder="09/08/2021"
            defaultValue={itemData?.startDate}
          />
          <Input
            label="Start time"
            id="start-time"
            placeholder="10:00"
            defaultValue={itemData?.startTime}
          />
        </Styled.FormDate>

        <Styled.FormDate>
          <Input
            label="End date"
            id="end-date"
            placeholder="09/08/2021"
            defaultValue={itemData?.endDate}
          />
          <Input
            label="End time"
            id="end-time"
            placeholder="10:00"
            defaultValue={itemData?.endTime}
          />
        </Styled.FormDate>

        <Styled.FormDropdown>
          <Dropdown
            options={colorOptions}
            selected={selected}
            setSelected={setSelected}
            placement="top"
            label="Color"
          />
        </Styled.FormDropdown>
      </Styled.FormInputs>
    </Styled.FormInformation>
  );
};

export default Information;

import { Button } from '@components/Button';
import Dropdown from '@components/Dropdown';
import { Input } from '@components/Input';
import { Heading, HeadingVariants, TypoTags } from '@components/Typography';
import { colors } from '@styles/theme';
import { useState } from 'react';

import * as Styled from './components';
import SubTasks from './SubTasks';
import colorOptions from '../colorOptions';
import Modal from '@components/Modal';

const ListForm = () => {
  const [selected, setSelected] = useState<string>(colorOptions[0].name);

  return (
    <Styled.ListForm>
      <Styled.FormInformation>
        <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
          Information
        </Heading>
        <Styled.FormInputs>
          <Input label="Name" id="name" placeholder="Enter name" />
          <Input as="textarea" label="Description" id="desc" placeholder="Enter Description" />

          <Styled.FormDate>
            <Input label="Start date" id="start-date" placeholder="09/08/2021" />
            <Input label="Start time" id="start-time" placeholder="10:00" />
          </Styled.FormDate>

          <Styled.FormDate>
            <Input label="End date" id="end-date" placeholder="09/08/2021" />
            <Input label="End time" id="end-time" placeholder="10:00" />
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

      <Styled.FormSubTask>
        <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
          Sub-tasks
        </Heading>

        <Styled.FormSubTaskWrapper>
          <SubTasks />
        </Styled.FormSubTaskWrapper>
      </Styled.FormSubTask>
    </Styled.ListForm>
  );
};

export default ListForm;

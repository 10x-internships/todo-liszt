import { useState } from 'react';
import { Input, Heading, HeadingVariants, TypoTags } from '@todo-liszt/common';

import { Dropdown } from '@components/Dropdown';

import colorOptions from '../../../colorOptions';

import * as Styled from './components';
import { useTranslation } from 'react-i18next';

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
  const [selected, setSelected] = useState<string>(itemData?.color || colorOptions[0].name);
  const { t } = useTranslation();

  return (
    <Styled.FormInformation>
      <Heading as={TypoTags.H2} variant={HeadingVariants.Headline4}>
        {t('scene.Lists.ListForm.Information.title')}
      </Heading>
      <Styled.FormInputs>
        <Input
          id="name"
          label={t('scene.Lists.ListForm.NameInput.label')}
          placeholder={t('scene.Lists.ListForm.NameInput.placeholder')}
          defaultValue={itemData?.name}
        />
        <Input
          as="textarea"
          id="desc"
          label={t('scene.Lists.ListForm.DescInput.label')}
          placeholder={t('scene.Lists.ListForm.DescInput.placeholder')}
          defaultValue={itemData?.desc}
        />

        <Styled.FormDate>
          <Input
            id="start-date"
            label={t('scene.Lists.ListForm.StartDateInput.label')}
            placeholder="09/08/2021"
            defaultValue={itemData?.startDate}
          />
          <Input
            id="start-time"
            label={t('scene.Lists.ListForm.StartTimeInput.label')}
            placeholder="10:00"
            defaultValue={itemData?.startTime}
          />
        </Styled.FormDate>

        <Styled.FormDate>
          <Input
            id="end-date"
            label={t('scene.Lists.ListForm.EndDateInput.label')}
            placeholder="09/08/2021"
            defaultValue={itemData?.endDate}
          />
          <Input
            id="end-time"
            label={t('scene.Lists.ListForm.EndTimeInput.label')}
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
            label={t('scene.Lists.ListForm.ColorInput.label')}
          />
        </Styled.FormDropdown>
      </Styled.FormInputs>
    </Styled.FormInformation>
  );
};

export default Information;

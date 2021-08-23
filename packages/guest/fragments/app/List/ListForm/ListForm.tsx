import * as Styled from './components';
import SubTasks from './SubTasks';
import Information from './Information';

interface ListFormProps {
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

const ListForm = ({ itemData }: ListFormProps) => {
  return (
    <Styled.ListForm>
      <Information itemData={itemData} />
      <SubTasks />
    </Styled.ListForm>
  );
};

export default ListForm;

import * as Styled from './components';
import { Check } from '../../components/Icons';
import { CheckboxProps } from './types';

const Checkbox = (props: CheckboxProps) => {
  const { id, label, ...others } = props;

  return (
    <Styled.Label htmlFor={id}>
      <input type="checkbox" id={id} {...others} />
      <Styled.Checkbox>
        <Check />
      </Styled.Checkbox>
      {label && <Styled.Text>{label}</Styled.Text>}
    </Styled.Label>
  );
};

export default Checkbox;

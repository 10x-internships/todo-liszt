import styled from '@emotion/styled';

import { Eye } from '@todo-liszt/common';
import { InputIcon } from '@todo-liszt/common';

interface ShowPasswordProps {
  onShowPassword: () => void;
}

const ShowPassword = ({ onShowPassword }: ShowPasswordProps) => {
  return (
    <InputIcon onClick={onShowPassword}>
      <Eye />
    </InputIcon>
  );
};

export default ShowPassword;

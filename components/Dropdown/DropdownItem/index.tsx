import styled from '@emotion/styled';

import { colors } from '../../../styles/theme';
import { OptionType } from '../types';
import { Text, TextVariants, TypoTags } from '../../Typography';
import { CircleLine } from '../../Icons';

interface DropdownItemProps extends React.ComponentPropsWithoutRef<'li'> {
  isAllItem?: boolean;
  option: OptionType;
}

const StyledDropdownItem = styled.li<Omit<DropdownItemProps, 'option'>>`
  padding: 0.5rem;

  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: var(--transition);

  & svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${({ theme }) => theme.dropdown.hoverBackground};
  }

  & ${Text} {
    color: ${({ isAllItem }) => (isAllItem ? colors.primary['01'] : 'inherit')};
  }
`;

const DropdownItem = ({ option, ...others }: DropdownItemProps) => {
  const { name, value } = option;

  return (
    <StyledDropdownItem isAllItem={value === ''} {...others}>
      <CircleLine />
      <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold={value === ''}>
        {name}
      </Text>
    </StyledDropdownItem>
  );
};

export default DropdownItem;

import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { Text, TextVariants, TypoTags } from '@todo-liszt/common';

import { DropdownItemProps } from '../types';
import { StyledDropdownItem } from './styledComponents';
import { useTranslation } from 'react-i18next';

const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ option, isTranslated, ...others }, ref) => {
    const { name, value, href, icon } = option;
    const { t } = useTranslation();

    if (href) {
      return (
        <StyledDropdownItem {...others}>
          <Link to={href}>
            {icon}
            <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
              {isTranslated ? t(name) : name}
            </Text>
          </Link>
        </StyledDropdownItem>
      );
    }

    return (
      <StyledDropdownItem isAllItem={value === ''} {...others}>
        {icon}
        {/* <CircleLine circleFill={colorFill} /> */}
        <Text as={TypoTags.Span} variant={TextVariants.Caption1} isBold={value === ''}>
          {isTranslated ? t(name) : name}
        </Text>
      </StyledDropdownItem>
    );
  }
);

export default DropdownItem;

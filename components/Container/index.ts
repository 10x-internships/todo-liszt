import styled from '@emotion/styled';
import { breakpoints } from '../../styles/theme';

const Container = styled.div`
  max-width: 71.625rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: ${breakpoints.tabletPortrait}) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export default Container;

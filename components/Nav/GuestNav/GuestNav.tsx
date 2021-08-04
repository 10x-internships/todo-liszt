import Link from 'next/link';
import styled from '@emotion/styled';

import * as Styled from './components';
import { Brand, Burger } from '../../Icons';
import Container from '../../Container';
import { Button, ButtonVariants } from '../../Button';

const GuestNav = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.Nav>
          <Link href="/" passHref>
            <a>
              <Brand />
            </a>
          </Link>

          <Styled.NavToggle>
            <Burger />
          </Styled.NavToggle>

          <Styled.NavAuth>
            <Link href="/signin" passHref>
              <Button variant={ButtonVariants.Theme}>Sign in</Button>
            </Link>
            <Link href="/signup" passHref>
              <Button>Sign up</Button>
            </Link>
          </Styled.NavAuth>
        </Styled.Nav>
      </Container>
    </Styled.Header>
  );
};

export default GuestNav;

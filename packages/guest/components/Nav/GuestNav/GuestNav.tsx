import Link from 'next/link';

import * as Styled from './components';
import { Brand, Burger } from '@todo-liszt/common'; // Icon
import { Button, ButtonVariants, Container } from '@todo-liszt/common';

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

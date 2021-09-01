import Link from 'next/link';
import { Brand, Burger } from '@todo-liszt/common'; // Icon
import { Button, ButtonVariants, Container } from '@todo-liszt/common';

import routePath from '@config/pathName';

import * as Styled from './components';

const Navbar = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.Nav>
          <Link href={routePath.index} passHref>
            <a>
              <Brand />
            </a>
          </Link>

          <Styled.NavToggle>
            <Burger />
          </Styled.NavToggle>

          <Styled.NavAuth>
            <Link href={routePath.signIn} passHref>
              <Button variant={ButtonVariants.Theme}>Sign in</Button>
            </Link>
            <Link href={routePath.signUp} passHref>
              <Button>Sign up</Button>
            </Link>
          </Styled.NavAuth>
        </Styled.Nav>
      </Container>
    </Styled.Header>
  );
};

export default Navbar;

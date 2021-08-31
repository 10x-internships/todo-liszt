import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './components';
import { Brand, Burger } from '@todo-liszt/common'; // Icon
import { Button, ButtonVariants, Container } from '@todo-liszt/common';
import { selectIsSignedIn } from '@redux/selectors/auth';
import { signOut } from '@redux/actions/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const handleLogout = () => dispatch(signOut());

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
            {!isSignedIn && (
              <>
                <Link href="/signin" passHref>
                  <Button variant={ButtonVariants.Theme}>Sign in</Button>
                </Link>
                <Link href="/signup" passHref>
                  <Button>Sign up</Button>
                </Link>
              </>
            )}

            {isSignedIn && (
              <Button variant={ButtonVariants.Theme} onClick={handleLogout}>
                Sign out
              </Button>
            )}
          </Styled.NavAuth>
        </Styled.Nav>
      </Container>
    </Styled.Header>
  );
};

export default Navbar;

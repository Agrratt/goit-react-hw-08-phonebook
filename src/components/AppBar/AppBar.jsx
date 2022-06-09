import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { authSelectors } from 'redux/auth/authSelectors';
import { Wrapper } from './AppBar.styled';

export function AppBar() {
  const isLogged = useSelector(authSelectors.getIsLogged);
  return (
    <Wrapper>
      <Navigation />
      {isLogged ? <UserMenu/> : <AuthNav/>}

    </Wrapper>
  );
}

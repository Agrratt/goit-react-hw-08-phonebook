import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {authSelectors} from 'redux/auth/authSelectors';

export function AppBar() {
  const isLogged = useSelector(authSelectors.getIsLogged);
  return (
    <header>
      <Navigation />
      {isLogged ? <UserMenu/> : <AuthNav/>}

    </header>
  );
}

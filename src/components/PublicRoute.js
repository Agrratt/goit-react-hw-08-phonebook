import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLogged = useSelector(authSelectors.getIsLogged);
  const shouldRedirect = isLogged && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
}

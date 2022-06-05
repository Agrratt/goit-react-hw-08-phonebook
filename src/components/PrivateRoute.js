import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLogged = useSelector(authSelectors.getIsLogged);
  return isLogged ? children : <Navigate to={redirectTo} replace />;
}

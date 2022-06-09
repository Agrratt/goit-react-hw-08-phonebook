import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Title, StyledLink, Text } from 'pages/HomePage.styled';

export default function HomePage() {
  const isLogged = useSelector(authSelectors.getIsLogged);
  const name = useSelector(authSelectors.getUserName);

  return isLogged ? (
    <Title>Welcome to your phonebook, {name} </Title>
  ) : (
    <>
      <Title>Welcome to phonebook</Title>
      <Text>
        <StyledLink to="/login">Login</StyledLink> or{' '}
        <StyledLink to="/register">Register</StyledLink> for continue
      </Text>
    </>
  );
}

import { useSelector } from 'react-redux';
import {
  LinkStyled,
  HeaderStyled,
} from 'components/Navigation/Navigation.styled';
import {authSelectors} from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLogged = useSelector(authSelectors.getIsLogged);
  return (
    <HeaderStyled>
      <nav>
        <LinkStyled to="/">Home</LinkStyled>
        {isLogged &&
          <LinkStyled to="contacts">Contacts</LinkStyled>}  
        
        
              
      </nav>
    </HeaderStyled>
  );
};

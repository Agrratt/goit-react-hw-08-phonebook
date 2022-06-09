import { useSelector } from 'react-redux';
import {
  NavLinkStyled,
  Wrapper,
} from 'components/Navigation/Navigation.styled';
import {authSelectors} from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLogged = useSelector(authSelectors.getIsLogged);
  return (
    
      <Wrapper>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLogged &&
          <NavLinkStyled to="contacts">Contacts</NavLinkStyled>}  
        
        
              
      </Wrapper>
    
  );
};

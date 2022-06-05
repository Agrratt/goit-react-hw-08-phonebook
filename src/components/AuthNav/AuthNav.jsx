import {
  LinkStyled,
  HeaderStyled,
} from 'components/Navigation/Navigation.styled';

export function AuthNav() {
    return (
        <HeaderStyled>
            <LinkStyled to="register">Register</LinkStyled>
            <LinkStyled to="login">Login</LinkStyled>
            

        </HeaderStyled>
        
    )
}
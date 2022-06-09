import {
  NavLinkStyled,
  Wrapper,
} from 'components/AuthNav/AuthNav.styled';

export function AuthNav() {
    return (
        <Wrapper>
            <NavLinkStyled to="register">Register</NavLinkStyled>
            <NavLinkStyled to="login">Login</NavLinkStyled>
            

        </Wrapper>
        
    )
}
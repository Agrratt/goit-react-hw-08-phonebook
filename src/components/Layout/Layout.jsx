import { Outlet } from "react-router-dom";
import { AppBar } from 'components/AppBar/AppBar';
import { Container, Header, Main } from 'components/Layout/Layout.styled';

export default function Layout() {
    return (
        <Container>
            <Header>
                <AppBar />
            </Header>
            <Main>
                <Outlet/>
            </Main>
        </Container>
    );
}
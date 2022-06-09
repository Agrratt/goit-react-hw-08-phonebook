import { useSelector, useDispatch } from "react-redux";
import {authSelectors} from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import { useNavigate } from "react-router-dom";
import { Wrapper, Text, Button } from "./UserMenu.styled";

export function UserMenu() {
    const name = useSelector(authSelectors.getUserName);
    const navigate = useNavigate();
    // const logOut = useSelector();
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Text>Welcome, { name}</Text>
            <Button type="button"
                onClick={() => {
                    dispatch(authOperations.logOut());
                    navigate('/')
                }}>
                Log out</Button>
        </Wrapper>
    )
}
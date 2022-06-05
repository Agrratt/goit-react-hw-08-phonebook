import { useSelector, useDispatch } from "react-redux";
import {authSelectors} from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import { useNavigate } from "react-router-dom";

export function UserMenu() {
    const name = useSelector(authSelectors.getUserName);
    const navigate = useNavigate();
    // const logOut = useSelector();
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Welcome, { name}</h3>
            <button type="button"
                onClick={() => {
                    dispatch(authOperations.logOut());
                    navigate('/')
                }}>
                Log out</button>
        </div>
    )
}
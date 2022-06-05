import { ReactComponent as Email } from 'components/icons/email.svg';
import { ReactComponent as Password } from 'components/icons/password.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/authOperations';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please log in</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <div>
            <Email />
          </div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onHandleChange}
            required
          />
        </label>

        <label>
          <div>
            <Password />
          </div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onHandleChange}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

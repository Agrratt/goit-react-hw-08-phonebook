import { useState } from 'react';
import { ReactComponent as User } from 'components/icons/user.svg';
import { ReactComponent as Email } from 'components/icons/email.svg';
import { ReactComponent as Password } from 'components/icons/password.svg';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div>
            <User />
          </div>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={onHandleChange}
            required
          />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

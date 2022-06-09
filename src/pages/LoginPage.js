import { ReactComponent as Email } from 'components/icons/email.svg';
import { ReactComponent as Password } from 'components/icons/password.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/authOperations';
import { Title, Form, Label, Input, Button } from 'pages/RegisterPage.styled';

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
      <Title>Please log in</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <div>
            <Email />
          </div>
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onHandleChange}
            required
          />
        </Label>

        <Label>
          <div>
            <Password />
          </div>
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onHandleChange}
            required
          />
        </Label>

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

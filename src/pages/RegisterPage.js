import { useState } from 'react';
import { ReactComponent as User } from 'components/icons/user.svg';
import { ReactComponent as Email } from 'components/icons/email.svg';
import { ReactComponent as Password } from 'components/icons/password.svg';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Title, Form, Label, Input, Button } from 'pages/RegisterPage.styled';

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
      <Title>Please register</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <div>
            <User />
          </div>
          <Input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={onHandleChange}
            required
          />
        </Label>

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

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

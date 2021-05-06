import { useState } from 'react';
import { register } from '../../redux/Auth/auth-operation';
import { useDispatch } from 'react-redux';

export const useRegisterView = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается `);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return {
    name,
    email,
    password,
    handleChange,
    handleSubmit,
  };
};

import { useState } from 'react';
import { register } from '../../redux/Auth/auth-operation';
import { useDispatch } from 'react-redux';

export const useRegisterView = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const [email, setEmail] = useState('');

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const [password, setPassword] = useState('');

  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
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
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

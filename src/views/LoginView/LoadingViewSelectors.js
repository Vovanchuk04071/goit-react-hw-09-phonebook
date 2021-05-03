import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/auth-operation';

export const useLoadingView = () => {
  const dispatch = useDispatch();
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

    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

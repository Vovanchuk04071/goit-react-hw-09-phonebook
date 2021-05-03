import React from 'react';
import styles from './Register.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useRegisterView } from './RegisterViewSelectors';

export default function RegisterView() {
  const {
    name,
    email,
    password,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useRegisterView();

  return (
    <div>
      <h1>Страница регистрации</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <TextField
          className={styles.label}
          type="text"
          name="name"
          autoFocus
          value={name}
          onChange={handleNameChange}
          label="name"
          variant="outlined"
          size="small"
        ></TextField>

        <TextField
          margin="normal"
          type="email"
          name="email"
          value={email}
          size="small"
          onChange={handleEmailChange}
          label="email"
          variant="outlined"
        >
          {'Почта '}
        </TextField>
        <TextField
          margin="normal"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          label="password"
          variant="outlined"
          size="small"
        ></TextField>
        <Button variant="contained" color="primary" size="small" type="submit">
          Зарегистрироватся
        </Button>
      </form>
    </div>
  );
}

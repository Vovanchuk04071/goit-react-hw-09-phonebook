import React from 'react';
import styles from './LoginView.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useLoadingView } from './LoadingViewSelectors';

export default function LoginView() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoadingView();

  return (
    <div>
      <h1>Страница логина</h1>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          margin="normal"
          type="email"
          name="email"
          value={email}
          autoFocus
          size="small"
          onChange={handleEmailChange}
          label="email"
          variant="outlined"
        >
          {'Почта'}
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
          Войти
        </Button>
      </form>
    </div>
  );
}

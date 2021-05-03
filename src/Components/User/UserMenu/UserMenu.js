import React from 'react';
import defaultImg from './default-avatar.png';
import styles from './UserMenu.module.css';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useUserMenu } from './UserMenuSelectors';

export default function UserMenu() {
  const { name, onLogout } = useUserMenu();

  return (
    <div className={styles.container}>
      <img src={defaultImg} alt="images" className={styles.img}></img>
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        onClick={onLogout}
        className={styles.btn}
        variant="contained"
        color="primary"
        size="small"
        endIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
    </div>
  );
}

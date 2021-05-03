import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css';
import UserMenu from '../UserMenu';
import { useAppBarSelector } from './AppBarSelector';

export default function AppBar() {
  const { isAuthenticated } = useAppBarSelector();
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

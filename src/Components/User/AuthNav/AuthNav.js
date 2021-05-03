import React from 'react';
import { NavLink } from 'react-router-dom';
import Error from '../Error';
import { useAuthNow } from './AuhtNawSelectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  const { isError, setError } = useAuthNow();

  return (
    <>
      {isError ? (
        <Error onClose={setError} message={isError} />
      ) : (
        <nav>
          <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
            Login
          </NavLink>
          <NavLink to="/register" style={styles.link} activeStyle={styles.activeLink}>
            Registration
          </NavLink>
        </nav>
      )}
    </>
  );
}

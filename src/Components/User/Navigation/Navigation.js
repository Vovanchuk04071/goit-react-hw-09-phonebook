import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigationSelectors } from './NavigationSelectors';

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

export default function Navigation() {
  const { isAuthenticated } = useNavigationSelectors();

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/contacts" style={styles.link} activeStyle={styles.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
